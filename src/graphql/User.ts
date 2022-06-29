import { objectType, extendType } from 'nexus'

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
    t.field('register', {
      type: 'User',
    })
  },
})
