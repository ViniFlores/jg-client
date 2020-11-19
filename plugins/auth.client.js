export default async({ app, redirect }) => {

  app.router.beforeEach((to, from, next) => {
    if (!['login', 'signup'].includes(to.name) && !app.store.getters['auth/jwt'])
      return redirect('/login')
    next()
  });

}