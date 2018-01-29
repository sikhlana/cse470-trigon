<template>
    <form class="ui form" @submit.prevent="calculate">
        <div class="field">
            <label for="ctrl_value">Input:</label>
            <input type="number" v-model="value" id="ctrl_value">
        </div>
    </form>
</template>
<script>
    export default {
        data()
        {
            return {
                value: 1,
                type: 'deg',
                calc: 'sin',
            };
        },

        methods:
        {
            calculate()
            {

            }
        }
    }
</script>