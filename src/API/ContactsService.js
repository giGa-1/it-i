import axios from 'axios';

export default class ContactsService {
    static async setPhoneNName (phone, namePerson) {
        await axios.post('/api//offer.php', {
            'name': namePerson,
            'number': phone
        });
    }
    static async setPhonaNameBudget (phone, namePerson, budgetMin, budgetMax) {
        await axios.post('/api//offer.php', {
            'name': namePerson,
            'number': phone,
            'budget_min': budgetMin,
            'budget_max': budgetMax
        });
    }
}