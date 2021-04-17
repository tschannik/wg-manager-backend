# Extend path with node executable dependencies
PATH="$PATH:$(npm bin)"

echo Enter name of new migration
read name

# Generate ORM config
node ./scripts/generate-orm-config.js

# Generate migration
ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -n $name