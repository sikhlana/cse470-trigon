<template>
    <form class="ui form" @submit.prevent="calculate">
        <div class="field">
            <label for="ctrl_input">Input:</label>
            <input type="number" v-model="input" id="ctrl_input">
        </div>

        <div class="inline fields">
            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_type_deg" name="type" v-model="type" value="deg" type="radio">
                    <label for="ctrl_type_deg">Apples</label>
                </div>
            </div>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_type_rad" name="type" v-model="type" value="rad" type="radio">
                    <label for="ctrl_type_rad">Apples</label>
                </div>
            </div>
        </div>

        <div class="field">
            <label for="ctrl_output">Output:</label>
            <input type="number" v-model="output" id="ctrl_output">
        </div>
    </form>
</template>
<script>
    export default {
        data()
        {
            return {
                input: 0,
                output: 1,
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