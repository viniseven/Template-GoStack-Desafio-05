 import AppError from '../errors/AppError';

 import { getCustomRepository } from 'typeorm';

 import Transaction from '../models/Transaction';
 import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionRepository.findOne(id);

    if(!transaction){
      throw new AppError('Transação não existe!');
    }

    await transactionRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
