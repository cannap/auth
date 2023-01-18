<template>
  <section
      class="absolute w-full top-0 h-screen overflow-hidden flex items-center justify-center items-center bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(36,36,36,1)]">
    <div class="absolute top-0 w-full h-ful">
      <div class="container mx-auto px-4 h-full">
        <div class="flex items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div class="flex flex-col items-center justify-center pt-10 pb-10 md:pt-20 md:pb-20">
              <!-- <img src="/logo.svg" height="400" width="400" class="mt-100"> -->
            </div>
            <div
                class="flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-transparent border-0">
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-gray-300 text-sm font-bold">Sign in with</h6>
                </div>
                <div class="btn-wrapper text-center">
                  <button
                      @click="signIn('github')"
                      class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-3 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button" style="transition: all 0.15s ease 0s;">
                    <img alt="Github Logo" class="w-5 mr-1" src="/github.png">Github
                  </button>
                  <button
                      @click="signIn('azure-ad')"
                      class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button" style="transition: all 0.15s ease 0s;">
                    <img alt="Microsoft Logo" class="w-5 mr-1" src="/microsoft.png">Microsoft
                  </button>
                </div>
                <hr class="mt-6 border-b-1 border-gray-300">
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="text-gray-300 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-gray-300 text-xs font-bold mb-2">Email</label>
                    <input v-model="email" type="text"
                           class="bg-gray-200 px-3 py-3 placeholder-gray-400 text-gray-300 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                           placeholder="Email" style="transition: all 0.15s ease 0s">
                  </div>
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-gray-300 text-xs font-bold mb-2">Password</label>
                    <input v-model="password" type="password"
                           class="bg-gray-200 px-3 py-3 placeholder-gray-400 text-gray-300 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                           placeholder="Password" style="transition: all 0.15s ease 0s">
                  </div>
                  <div>
                    <label class="inline-flex items-center cursor-pointer">
                      <input type="checkbox" class="form-checkbox text-gray-800 ml-1 w-5 h-5"
                             style="transition: all 0.15s ease 0s;">
                      <span class="ml-2 text-sm font-semibold text-gray-300">Remember me</span>
                    </label>
                  </div>
                  <div class="text-center mt-6">
                    <button
                        @click="signIn('email', {email: email, password: password})"
                        class="bg-gray-900 text-white active:bg-gray-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button" style="transition: all 0.15s ease 0s">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="flex flex-wrap mt-6 justify-center items-center">
              <a href="login" class="text-gray-300">
                <small>Already have an account?</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({auth: false})

const {signIn} = useSession()
</script>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>