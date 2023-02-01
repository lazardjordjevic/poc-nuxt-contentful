export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id !== 'size-passport') {
    }
    return navigateTo('/journal/size-passport')
})
