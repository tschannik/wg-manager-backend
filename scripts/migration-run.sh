# Extend path with node executable dependencies
PATH="$PATH:$(npm bin)"

echo Running migrations
echo $PWD

# Generate ORM config
node ./scripts/generate-orm-config.js;

# Run migration
ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run;