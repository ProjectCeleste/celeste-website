export default function({ route, redirect }) {
  const i = route.meta.length - 1
  if (route.meta[i].defaultRoute) {
    return redirect(
      route.path +
        (!route.path.endsWith("/") ? "/" : "") +
        route.meta[i].defaultRoute
    )
  }
}
