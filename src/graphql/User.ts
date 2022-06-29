import { objectType, extendType } from 'nexus'
import { nonNull, stringArg } from 'nexus/dist-esm'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('login')
    t.string('name')
  },
})

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUserDraft', {
      type: 'User',
      args: {
        login: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve(root, { login, name }, ctx) {
        ctx.prisma.user.create({
          data: { login, name },
        })
      },
    })
  },
})
