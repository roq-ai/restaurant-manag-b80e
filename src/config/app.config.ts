interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage the restaurant in the application',
    'Invite or remove managers',
    'View all information of the restaurant',
    'View all managers of the restaurant',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6cb5224e-4ec3-4c1b-b0c5-772ad0254892',
};
