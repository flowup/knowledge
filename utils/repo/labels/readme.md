# Label provider

This terraform configuration automatically creates labels on a given repository. It is useful to run this script on any new repository.

> :bulb: This configuration is additive, it will never delete any labels.

## Leenux setup

```bash
# download terraform
wget https://releases.hashicorp.com/terraform/0.11.3/terraform_0.11.3_linux_amd64.zip
# unzip to /usr/bin (or whatever you like that is in your $PATH)
sudo unzip terraform_0.11.3_linux_amd64.zip -d /usr/bin/
```

## Executing on a repository

```bash
# in knowledge/utils/repo/labels directory
# this will download all needed providers (github)
terraform init

export TF_VAR_github_token="your-personal-token-here"
export TF_VAR_github_organization="flowup"
export TF_VAR_github_repository="your-repository"

# type 'yes' when asked
terraform apply
```

## FAQ

**What if I don't provide environment variables?**
- You will be asked to provide them interactively during the `apply` command
