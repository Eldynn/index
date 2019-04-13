// @ts-ignore
export default (Index, User, Group, Profile, Member): void => {
  const configuration = {
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
    ],
    groups: [
      {
        id: '10d2a85c-0c2e-4387-aa22-c455f35444f0',
        owner: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
        name: 'Le groupe de Bob',
        members: [
          {
            id: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
            type: 'owner'
          },
          {
            id: '00d2a85c-0c2e-4387-aa22-c455f35444f1',
            type: 'permanent'
          }
        ]
      },
      {
        id: '10d2a85c-0c2e-4387-aa22-c455f35444f1',
        owner: '00d2a85c-0c2e-4387-aa22-c455f35444f2',
        name: 'Le groupe de Thomas',
        members: [
          {
            id: '00d2a85c-0c2e-4387-aa22-c455f35444f0',
            type: 'temporary'
          },
          {
            id: '00d2a85c-0c2e-4387-aa22-c455f35444f2',
            type: 'owner'
          }
        ]
      }
    ]
  };

  const index = new Index();

  configuration.users.forEach(
    (user): void => {
      const profile = new Profile(user);
      index.add(new User(user.id, profile));
    }
  );

  configuration.groups.forEach(
    (group): void => {
      const newGroup = new Group(
        group.id,
        index.get(group.owner),
        new Profile(group)
      );

      group.members.forEach(
        (member): void => {
          Member.build(index.get(member.id), newGroup, new Profile(member));
        }
      );

      index.add(newGroup);
    }
  );

  test('Users', (): void => {
    expect(index.users.size).toBe(3);
  });

  test('Groups', (): void => {
    expect(index.groups.size).toBe(2);
  });

  test('Groups Members', (): void => {
    expect(index.get(configuration.groups[0].id).members.size).toBe(2);
    expect(index.get(configuration.groups[1].id).members.size).toBe(2);
  });
};
