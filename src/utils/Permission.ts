// utils/permissions.ts
export const hasPermission = (
    user: { role: string } | null,
    resource: string,
    action: string
  ): boolean => {
    const permissions: Record<string, Record<string, string[]>> = {
      admin: { movie: ["create", "delete"] },
      user: { movie: ["read"] },
    };
  
    if (!user) return false;
    
    const rolePermissions = permissions[user.role];
    if (!rolePermissions) return false;
  
    const resourcePermissions = rolePermissions[resource];
    if (!resourcePermissions) return false;
  
    return resourcePermissions.includes(action);
  };
  