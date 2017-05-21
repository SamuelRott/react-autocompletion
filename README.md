# React AutoCompletion

An React.js component to use autocomplete with Radio4000 api.

You can see a demonstration at [http://react-autocompletion.surge.sh/](http://react-autocompletion.surge.sh/).

### React boilerplate

The component is developed with the boilerplate proposed by [React documentation](https://facebook.github.io/react/docs/installation.html).

In addition to be simple and fast to implement it give us a playground for testing.

**available scripts:**

`yarn start`

`yarn build`

`yarn test`

`yarn eject`

### Data

Live data comes from [radio4000 API](https://github.com/internet4000/radio4000-api-docs).

The API being deployed with [https://zeit.co/now](https://zeit.co/now) will sleep if its not in use for 30 seconds (they implemented this to save resources), so you may need to refresh the page to "activate" it.

We take the `title` value as queryParam and `icontains` as filterMethod.
As described by the documentation, the query parameter should be contained by the channel value, it is case insensitive.

With the use of the filterMethod we use the API to filter our result and send us only the wanted results.  

### Dependencies

**There are two dependencies in use:**
1. [whatwg-fetch](https://github.com/github/fetch)
	Polyfill for the `fetch()` function, it as a wide browser support.

2. [lodash](https://lodash.com/)
	In addition to delivering modularity, performance & extras it has a lean and understandable documentation.

### Tests

Run test with `yarn test`.

Here we added [enzyme](https://github.com/airbnb/enzyme) as a test utility, mainly for its easy to use and intuitive syntax.

We test the presence of component and element in our App and the state before any action.

### Arrow Controls

There is no js solution implemented, but you can use html native arrow controls with the `<select>` and `<option>` element.

### To-dos

1. Implement a javascript solution for Arrow controls.
2. Add an onSubmit event for the form, in this case maybe open selected channel in new tab ?
3. Add more test (check fetch result, functions output...).
