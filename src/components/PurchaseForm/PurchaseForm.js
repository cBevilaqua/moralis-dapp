import { PurchaseService } from "@/services"

export default {
  name: "PurchaseForm",
  data() {
    return {
      purchaseService: new PurchaseService(),
      value: 100
    }
  },
  methods: {
    async buy() {
      const user = Moralis.User.current()

      if (user && this.value) {
        const purchase = await this.purchaseService.save(user.id, this.value)
        this.$emit("save", purchase)
      }

    }
  }
}
