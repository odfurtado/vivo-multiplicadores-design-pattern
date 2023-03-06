import OrderValidator from './OrderValidator';
import ValidateOrderType from './ValidateOrderType';
import ValidateRefundOrderRequest from './ValidateRefundOrderRequest';
import ValidateSalesOrderRequest from './ValidateSalesOrderRequest';
import ValidateStockForSalesOrder from './ValidateStockForSalesOrder';

export default class OrderValidatorBuilder {
  static build(): OrderValidator {
    const checkStockForSalesOrder = new ValidateStockForSalesOrder();
    const refundOrderValidator = new ValidateRefundOrderRequest(
      checkStockForSalesOrder
    );
    const salesOrderValidator = new ValidateSalesOrderRequest(
      refundOrderValidator
    );
    const orderTypeValidator = new ValidateOrderType(salesOrderValidator);
    return orderTypeValidator;
  }
}
