import PurchaseForm from '@/components/PurchaseForm';
import { PurchaseService, UserService } from '@/services';

export default {
  name: 'Purchases',
  components: { PurchaseForm },
  data() {
    return {
      purchaseService: new PurchaseService(),
      userService: new UserService(),
      purchases: [],
    };
  },
  async mounted() {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.purchases = await this.purchaseService.getAll(user.id);
    }
  },
  methods: {
    onPurchase(purchase) {
      this.purchases.push(purchase);
    },
  },
};
