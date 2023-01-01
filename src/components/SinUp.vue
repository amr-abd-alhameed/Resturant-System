<template>
    <form @click.prevent>
        <div class="row align-items-center g-3">
            <h1>Sin Up</h1>
            <div class="col-auto d-block mx-auto">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Name"
                    v-model="name"
                />
                <!-- <span class="error-feedback" v-if="v$.name.$error">{{
                    v$.$errors[0].$message
                }}</span> -->
            </div>
        </div>
        <br />
        <div class="row align-items-center g-3">
            <div class="col-auto d-block mx-auto">
                <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="email"
                />
                <!-- <span class="error-feedback" v-if="v$.email.$error">{{
                    v$.$errors[0].$message
                }}</span> -->
            </div>
        </div>
        <br />
        <div class="row align-items-center g-3">
            <div class="col-auto d-block mx-auto">
                <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Your Password"
                    v-model="pass"
                />
                <!-- <span class="error-feedback" v-if="v$.pass.$error">{{
                    v$.$errors[0].$message
                }}</span> -->
            </div>
        </div>
        <br />
        <div class="row align-items-center g-3">
            <div class="col-auto d-block mx-auto">
                <button
                    type="submit"
                    @click="SinUpNow()"
                    class="btn btn-primary"
                >
                    SinUp
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    type="button"
                    @click="redirectTo({ val: 'LogIn' })"
                    class="btn btn-primary"
                >
                    LogIn
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";
// import useVuelidate from "@vuelidate/core";
// import useValidate from "@vuelidate/core";
// import { required, email } from "@vuelidate/validators";
// import { required, email } from "@vuelidate/validators";
import { useValidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
    name: "SinUpForm",
    data() {
        return {
            v$: useValidate(),
            name: "",
            email: "",
            pass: "",
        };
    },
    Validations() {
        return {
            name: { required },
            email: { required, email },
            pass: { required },
        };
    },
    methods: {
        ...mapActions(["redirectTo"]),
        SinUpNow() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("found");
            } else {
                console.log("not found");
            }
        },
    },
};
</script>
