<template>
    <form class="ui form" @submit.prevent="">
        <div class="field">
            <label for="ctrl_input">Input:</label>
            <input type="number" v-model="input" id="ctrl_input">
        </div>

        <div class="inline fields">
            <label>Input is in:</label>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_type_deg" name="type" v-model="type" value="deg" type="radio">
                    <label for="ctrl_type_deg">degrees</label>
                </div>
            </div>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_type_rad" name="type" v-model="type" value="rad" type="radio">
                    <label for="ctrl_type_rad">radians</label>
                </div>
            </div>
        </div>

        <div class="inline fields">
            <label>Calculate:</label>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_calc_sin" name="calc" v-model="calc" value="sin" type="radio">
                    <label for="ctrl_calc_sin">sin</label>
                </div>
            </div>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_calc_cos" name="calc" v-model="calc" value="cos" type="radio">
                    <label for="ctrl_calc_cos">cos</label>
                </div>
            </div>

            <div class="field">
                <div class="ui radio checkbox">
                    <input id="ctrl_calc_tan" name="calc" v-model="calc" value="tan" type="radio">
                    <label for="ctrl_calc_tan">tan</label>
                </div>
            </div>
        </div>

        <div class="field">
            <label for="ctrl_output">Output:</label>
            <input type="number" v-model="output" readonly id="ctrl_output">
        </div>
    </form>
</template>
<script>
    export default {
        data()
        {
            return {
                input: 0,
                type: 'deg',
                calc: 'sin',
            };
        },

        computed: {
            output()
            {
                let v, o = 0;

                if (this.type === 'deg') {
                    v = (this.input / 180) * Math.PI;
                } else {
                    v = this.input;
                }

                switch (this.calc) {
                    case 'sin':
                        o = Math.sin(v);
                        break;

                    case 'cos':
                        o = Math.cos(v);
                        break;

                    case 'tan':
                        o = Math.tan(v);
                        break;
                }

                return o;
            }
        },

        created()
        {
            this.calculate();
        }
    }
</script>