## Description
This is a boilerplate project created by @vue/cli to demonstrate the broken coverage reporting when running Jest unit testing.
## Steps to recreate this project.
system prerequisites: node 16.15.0, @vue/cli 5.0.4

Create a new project using @vue/cli

`vue create testproject`

select ‘Manually select features’
Select:

* Babel
* Linter / Formatter
* Unit Testing

Choose version of Vue.js: *2.x*  
Linter / formatter *ESLint + Standard config*  
*Lint on Save*  
Testing solution: *Jest*  
config placement for Babel, ESLint, etc: *In dedicated config files*

wait for project to build...

`cd testproject`

in jest.config.js add collectCoverage: true
```
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true
}
```
Add a simple method to src/components/HelloWorld.vue and save:
```
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    sum (a, b) {
      return a + b
    }
  }
}
</script>
```
Run the test suite:

yarn test:unit

Coverage report shows 100% code coverage despite there being no test for the sum method
```
 PASS  tests/unit/example.spec.js
  HelloWorld.vue
    ✓ renders props.msg when passed (39 ms)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 HelloWorld.vue |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.58 s
Ran all test suites.
✨  Done in 8.58s.
```
## Expected Result
This bug does not appear in Vue3 apps. This test in Vue3 yields the correct coverage report.
```
 PASS  tests/unit/example.spec.ts
  HelloWorld.vue
    ✓ renders props.msg when passed (58 ms)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |   66.66 |      100 |       0 |   66.66 |                   
 HelloWorld.vue |   66.66 |      100 |       0 |   66.66 | 45                
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        6.518 s
Ran all test suites.
✨  Done in 10.09s.
```
Below is the boilerplate Readme content from `vue cli` if you'd prefer to clone this repo instead of going through the setup steps above.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
