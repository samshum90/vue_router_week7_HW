<template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link :to="{name:'Films', params: { films: films }}">Films</router-link> |
            <router-link to="/charts">Charts</router-link> |
            <router-link to="/lists">Lists</router-link> |
            <router-link to="/about">About</router-link>
        </div>
</template>

<script>
    export default {
        name:"The-Navigation",
        props: ['films']
}
</script>

<style>
#nav {
    display: flex;
    align-items: center;
    margin: 2em;
}

#nav a {
  font-weight: bold;
  color: var(--peach);
}

#nav a.router-link-exact-active {
  color: var(--yellow);
}
</style>>
