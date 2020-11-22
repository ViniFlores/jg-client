export default async({ app, redirect }) => {

  app.router.beforeEach((to, from, next) => {
    if (!['login', 'signup', 'recovery', 'redefine-jwt'].includes(to.name) && !app.store.getters['auth/jwt'])
      return redirect('/login')
    next()
  });

}