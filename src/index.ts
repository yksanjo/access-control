/**
 * Access Control
 * 
 * Standalone library for access control and authorization.
 */

export type Permission = 'read' | 'write' | 'delete' | 'execute' | 'admin';

export interface Role {
  name: string;
  permissions: Permission[];
}

export interface User {
  id: string;
  roles: string[];
}

export class AccessControl {
  private roles: Map<string, Role>;

  constructor() {
    this.roles = new Map();
  }

  addRole(name: string, permissions: Permission[]): void {
    this.roles.set(name, { name, permissions });
  }

  hasPermission(user: User, permission: Permission): boolean {
    for (const roleName of user.roles) {
      const role = this.roles.get(roleName);
      if (role && role.permissions.includes(permission)) {
        return true;
      }
    }
    return false;
  }

  getRoles(): Role[] {
    return Array.from(this.roles.values());
  }
}

export default AccessControl;
