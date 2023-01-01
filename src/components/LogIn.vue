<template>
    <form @click.prevent>
        <h1>LogIn</h1>
        <div class="row align-items-center g-3">
            <div class="col-auto d-block mx-auto">
                <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="email"
                />
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
            </div>
        </div>
        <br />
        <div class="row align-items-center g-3">
            <div class="col-auto d-block mx-auto">
                <button type="submit" class="btn btn-primary">LogIn</button>
                &nbsp;&nbsp;&nbsp;
                <button
                    type="button"
                    @click="redirectTo({ val: 'SinUp' })"
                    class="btn btn-primary"
                >
                    SinUp
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "LogInForm",
    data() {
        return {
            email: "",
            pass: "",
        };
    },
    methods: {
        ...mapActions(["redirectTo"]),
        // SinUpPage() {
        //     this.$router.push({ name: "SinUp" });
        // },
    },
};
</script>
