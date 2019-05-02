import { Index, User, Group, Member } from '../build/umd';

const configuration = {
  groups: [
    {
      id: '10d2a85c-0c2e-4387-aa22-c455f35444f0',
      members: [
        {
          id: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
          type: 'owner'
        },
        {
          id: '00d2a85c-0c2e-4387-aa22-c455f35444f1',
          type: 'permanent'
        }
      ],
      name: 'Le groupe de Bob',
      owner: '00d2a85c-0c2e-4387-aa22-c455f35444f0'
    },
    {
      id: '10d2a85c-0c2e-4387-aa22-c455f35444f1',
      members: [
        {
          id: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
          type: 'temporary'
        },
        {
          id: '00d2a85c-0c2e-4387-aa22-c455f35444f2',
          type: 'owner'
        }
      ],
      name: 'Le groupe de Thomas',
      owner: '00d2a85c-0c2e-4387-aa22-c455f35444f2'
    }
  ],
  users: [
    {
      id: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
      name: 'Bob',
      status: true
    },
    {
      id: '00d2a85c-0c2e-4387-aa22-c455f35444f1',
      name: 'Alice',
      status: true
    },
    {
      id: '00d2a85c-0c2e-4387-aa22-c455f35444f2',
      name: 'Thomas',
      status: false
    }
  ]
};

const index = new Index();

configuration.users.forEach(
  (user): void => {
    index.add(new User(user.id, user));
  }
);

configuration.groups.forEach(
  (group): void => {
    const newGroup = new Group(group.id, index.get(group.owner) as User, group);

    group.members.forEach(
      (member): void => {
        Member.build(index.get(member.id) as User, newGroup, member);
      }
    );

    index.add(newGroup);
  }
);

describe('Index', (): void => {
  test('Users', (): void => {
    expect(index.users.size).toBe(3);
  });

  test('Groups', (): void => {
    expect(index.groups.size).toBe(2);
  });

  test('Groups Members', (): void => {
    const a = index.get(configuration.groups[0].id) as Group;
    const b = index.get(configuration.groups[1].id) as Group;

    expect(a.size).toBe(2);
    expect(b.size).toBe(2);
  });
});
