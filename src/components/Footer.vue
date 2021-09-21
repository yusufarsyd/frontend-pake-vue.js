<template>
  <div>

        <div class="bg-white text-center fixed inset-x-0 bottom-0 z-10">
            <div class="container mx-auto grid grid-cols-5 gap-4 p-2 sm:w-full md:w-4/12">

                <div>
                <router-link :to="{name: 'home'}"
                    class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                <img class="inline-block mb-1" width="25" height="25"
                src="@/assets/images/home1.png">
                <span class="block text-xs">Home</span>
            </router-link>
                </div>

                
                <div>
                <router-link :to="{name: 'campaign.index'}"
                 class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                     <img width="25" height="25" class="inline-block mb-1"
                      src="@/assets/images/donasi.png">
                     <span class="tab tab-kategori block text-xs">Program</span>
                </router-link>
                    </div>

                      <div>
                <router-link :to="{name: 'campaign.index'}"
                 class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                     <img width="25" height="25" class="inline-block mb-1"
                src="@/assets/images/program1.png">
                <span class="block text-xs">Ziswaf</span>
            </router-link>
                </div>

               <div>
                  <router-link :to="{name: 'donation.index'}"
                  class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                    <img width="25" height="25" class="inline-block mb-1"
                       src="@/assets/images/berita.png">
                       <span class="block text-xs">Berita</span>
                     </router-link>
                </div>


           

                <div>
                    <router-link :to="{name: 'login'}"
                        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center">
                        <img width="25" height="25" class="inline-block mb-1"
                            src="@/assets/images/person.png">
                        <span class="block text-xs">Akun</span>
                     </router-link>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>