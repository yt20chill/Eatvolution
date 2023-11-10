# Eatvolution

Here are some notes that might be helpful during the development stage. The real documentation of this game is temporarily put inside the docs folder.

## Project init

```bash
cp .env.example .env
# tested in macOS and Linux
createdb "eatvolution"
# OR in psql, run sql to create database
psql
CREATE DATABASE "eatvolution"
```

&nbsp;


## Rebuild database (Linux/macOS)
this line will delete and recreate db named `eatvolution` and `eatvolution_test`, then run latest migrations and seed

**IMPORTANT** This action will delete all the data inside the db. Use with caution
```bash
source {path_to_project_root_folder}/bin/rebuildDb.sh
```

&nbsp;

## Rules to be observed

1. Make small commits
2. Write clear commit messages
3. Push often

No worries, github comes with version control. You can't break anything.
Still not confident? You can work on your own branch 😌. After making sure nothing is broken, merge with the `main` branch

&nbsp;

## Pull from git

normally, all completed features will be merged to `main`.
it's important to keep your code updated with the latest main

```bash
# this line downloads the latest updates in main to your branch
git fetch origin main
# this line merge the changes to your branch
git merge origin/main
```

Running the second line may result in conflict if the same file happens to be changed from the last pull
You must resolve the conflicts manually. Next, push the resolved version to repo for your teammates 🥰

```bash
git add .
git commit -m "ci: merged with latest main"
git push
```

## Adding features

You may want to work on a new branch

```bash
# to create and switch to a new branch
git checkout -b {feature_name}
```

To switch to an existing brach

```bash
# if you have some edits that are not ready to be committed, stash them temporarily
# remember to pop out the stash when you get back to your current branch by git stash pop
git stash
git checkout {branch_name}
# to integrate with the latest main branch
git fetch origin main
git merge origin/main
```

## Update `main` with your latest code

You now have your wonderful code in your own branch, how to push it to the `main` branch and share it to all your teammates?

1. make sure it has no conflicts with the current main
```bash
# merge with latest main
git fetch origin main
git merge origin/main
```
2. manually solve any conflicts and then push the latest branch to repo
```bash
git add .
git commit -m "{meaningful commit message}"
git push
```

3. checkout to the `main` branch and merge it with your latest branch
```bash
git checkout main
git fetch origin {your_branch}
git merge origin/{your_branch}
git push
```

## Appendix

### Naming convention

#### Go for clarity

It's okay to have a long but clear variable name than short but ambiguous one. Good variable names facilitates code understanding. Plus Intellisense will complete the typing for us so we don't have to type the whole name by ourselves.

#### Case format when naming different things

- `python`: snake_case
- `js/ts`: camelCase
- `db`: snake_case
- `class` (both js and python): PascalCase
- `type/interface`: PascalCase
- `constants`: SCREAMING_SNAKE_CASE

### Useful Links

- [Winston Logger in Nest js](https://timothy.hashnode.dev/advance-your-nestjs-application-with-winston-logger-a-step-by-step-guide)
- [CalorieNinjas](https://calorieninjas.com/)
  &nbsp;

### CalorieNinjas API

request example
GET `https://api.calorieninjas.com/v1/nutrition?query=oranges`

response example

```json
{
	"items": [
		{
			"name": "oranges",
			"calories": 49.8,
			"serving_size_g": 100.0,
			"fat_total_g": 0.1,
			"fat_saturated_g": 0.0,
			"protein_g": 0.9,
			"sodium_mg": 1,
			"potassium_mg": 23,
			"cholesterol_mg": 0,
			"carbohydrates_total_g": 12.5,
			"fiber_g": 2.2,
			"sugar_g": 8.6
		}
	]
}
```
