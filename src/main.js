import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




// https://api.instagram.com/oauth/authorize
//   ?client_id=921180558656209
//   &redirect_uri=https://ruthtruslove.co.uk/
//   &scope=user_profile,user_media
//   &response_type=code

// AQBvsvOJvzcOfGsWBYcYQ7JE5yRlA9eDYBwJlEq9PxF5rLVq21uYXX4k5NEyvHY3FsjFi10FMrJrHWU9IHd9z9XKxh3wWGqw4lk3gz-EfvyX50y9UueO9pxrdgIyt93wlyCCvZ3jpaGI7zWbt3iUgUFeBLNcZ1IzMGL_v_myJwBwuO_pRDwySIDxDoRhH8dA_I7v2k2art1O62GblD7mmCfNHoogBZj0rwfHiv0qg_lFlA

// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=921180558656209 \
//   -F client_secret=c56adc50bba8c777d102aeea23905ff9 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://ruthtruslove.co.uk/ \
//   -F code=AQBvsvOJvzcOfGsWBYcYQ7JE5yRlA9eDYBwJlEq9PxF5rLVq21uYXX4k5NEyvHY3FsjFi10FMrJrHWU9IHd9z9XKxh3wWGqw4lk3gz-EfvyX50y9UueO9pxrdgIyt93wlyCCvZ3jpaGI7zWbt3iUgUFeBLNcZ1IzMGL_v_myJwBwuO_pRDwySIDxDoRhH8dA_I7v2k2art1O62GblD7mmCfNHoogBZj0rwfHiv0qg_lFlA

//   {"access_token": "IGQVJXUkY3ZAUd6bmw0M1lNNkE1Ynktd0xPaURNaTBaVUp1LWFZAWnJ0aVhzSGhrc0xuYm5JWklRRTV4WU41MERydjIzaXV0Qk5PSHVNUDFuSnZA4eXFnTFluSVNEVFdfWEVNUTRSZA1h0MEpUdFRpbklIbEdnNU1ZAcGt0S1Fj", "user_id": 17841446009833366}

//   curl -X GET \
//   'https://graph.instagram.com/17841446009833366?fields=id,username&access_token=IGQVJXUkY3ZAUd6bmw0M1lNNkE1Ynktd0xPaURNaTBaVUp1LWFZAWnJ0aVhzSGhrc0xuYm5JWklRRTV4WU41MERydjIzaXV0Qk5PSHVNUDFuSnZA4eXFnTFluSVNEVFdfWEVNUTRSZA1h0MEpUdFRpbklIbEdnNU1ZAcGt0S1Fj'

//   {"id":"17841446009833366","username":"ruthtrusloveuk"}