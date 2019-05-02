/* eslint-disable import/no-extraneous-dependencies */
import { performance } from 'perf_hooks';
import prettyMs from 'pretty-ms';
import randomstring from 'randomstring';
import uuid from 'uuid/v4';

import { Group, Index, Member, User } from '../build/umd';

const result: {
  [key: string]: { min: number; max: number; average: number };
} = {};

function randomInt(min: number, max: number): number {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  );
}

interface ConfUser {
  id: string;
  name: string;
  status: boolean;
}

interface ConfGroup {
  id: string;
  name: string;
  owner: string;
  members: { id: string; type: string }[];
}

function createConfiguration(
  nUsers: number,
  nGroups: number
): {
  users: ConfUser[];
  groups: ConfGroup[];
} {
  const res: {
    users: ConfUser[];
    groups: ConfGroup[];
  } = {
    users: [],
    groups: []
  };

  for (let i = 0; i < nUsers; i += 1) {
    res.users.push({
      id: uuid(),
      name: randomstring.generate({
        readable: true,
        length: randomInt(3, 50)
      }),
      status: Math.random() >= 0.5
    });
  }

  for (let i = 0; i < nGroups; i += 1) {
    const group: ConfGroup = {
      id: uuid(),
      members: null,
      name: randomstring.generate({
        readable: true,
        length: randomInt(3, 50)
      }),
      owner: null
    };

    const owner = res.users[randomInt(0, res.users.length - 1)];
    group.owner = owner.id;
    const members: { [key: string]: { id: string; type: string } } = {};
    members[owner.id] = {
      id: owner.id,
      type: 'owner'
    };

    const nMember: number = randomInt(
      0,
      res.users.length - 2 < 100 ? res.users.length - 2 : 100
    );
    for (let j = 0; j < nMember; j += 1) {
      const user = res.users[randomInt(0, res.users.length - 1)];

      members[user.id] = {
        id: user.id,
        type: Math.random() >= 0.5 ? 'Permanent' : 'Temporaire'
      };
    }

    group.members = Array.from(Object.values(members));

    res.groups.push(group);
  }

  return res;
}

function buildConfiguration(nUsers: number, nGroups: number): Index {
  const configuration = createConfiguration(nUsers, nGroups);

  const t = performance.now();

  const index = new Index();

  configuration.users.forEach(
    (user): void => {
      index.add(new User(user.id, user));
    }
  );

  configuration.groups.forEach(
    (group): void => {
      const newGroup = new Group(
        group.id,
        index.get(group.owner) as User,
        group
      );

      group.members.forEach(
        (member): void => {
          Member.build(index.get(member.id) as User, newGroup, member);
        }
      );

      index.add(newGroup);
    }
  );

  const key = `build ${nUsers} ${nGroups}`;
  const current = performance.now() - t;
  if (!result[key]) {
    result[key] = { min: current, max: current, average: current };
  } else {
    if (result[key].min > current) {
      result[key].min = current;
    } else if (result[key].max < current) {
      result[key].max = current;
    }

    result[key].average = (result[key].average + current) / 2;
  }

  return index;
}

describe('Index', (): void => {
  const steps = [[10, 10], [100, 100], [1000, 1000]];

  steps.forEach(
    (step): void => {
      test(`Build ${step[0]} ${step[1]}`, (): void => {
        for (let i = 0; i < 100; i += 1) {
          buildConfiguration(step[0], step[1]);
        }

        const res = result[`build ${step[0]} ${step[1]}`];
        console.log(
          `Build ${step[0]} ${step[1]}`,
          JSON.stringify(
            {
              min: prettyMs(res.min),
              max: prettyMs(res.max),
              average: prettyMs(res.average)
            },
            null,
            2
          )
        );

        expect(res.average).toBeLessThanOrEqual(100000);
      });
    }
  );
});
