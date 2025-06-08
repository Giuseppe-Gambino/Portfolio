const fs = require("fs");

const targetPath = "./src/environments/environment.prod.ts";

const envFileContent = `
export const environment = {
  production: true,
  emailServiceID: '${process.env.EMAIL_SERVICE_ID}',
  emailTemplateID: '${process.env.EMAIL_TEMPLATE_ID}',
  emailPublicKey: '${process.env.EMAIL_PUBLIC_KEY}'
};
`;

fs.writeFileSync(targetPath, envFileContent);
