import { Purchase } from "@/models"

export default class PurchaseService {
  async save(userId, value) {
    const purchase = new Purchase();
    purchase.set("userId", userId);
    purchase.set("value", Number(value));
    return purchase.save();
  }

  async getAll(userId) {
    const query = new Moralis.Query(Purchase);
    query.equalTo("userId", userId);
    return query.find();
  }
}
