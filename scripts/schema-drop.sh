# Extend path with node executable dependencies
PATH="$PATH:$(npm bin)"

echo Dropping schema

# Generate ORM config
node ./scripts/generate-orm-config.js

# Drop Schema
ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js schema:drop;