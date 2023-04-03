import useStore from "@/store";

export const hasPermissions = function (...roles) {
  const { user } = useStore();
  const userRoles = user.roles

  return userRoles.some(role => {
    return roles.includes(role)
  })
}

export const hasAllPermissions = function (...roles) {
  const { user } = useStore();
  const userRoles = user.roles

  const hasRoles = userRoles.filter(role => {
    return userRoles.includes(role)
  })

  return hasRoles.length === roles.length;
}
