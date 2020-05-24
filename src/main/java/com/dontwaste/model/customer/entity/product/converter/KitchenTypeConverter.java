package com.dontwaste.model.customer.entity.product.converter;

import com.dontwaste.model.customer.entity.product.productType.KitchenType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class KitchenTypeConverter implements AttributeConverter<KitchenType, Integer> {
    @Override
    public Integer convertToDatabaseColumn(KitchenType kitchenType) {
        return kitchenType == null ? null : kitchenType.getId();
    }

    @Override
    public KitchenType convertToEntityAttribute(Integer num) {
        return num == null ? null : KitchenType.getById(num);
    }
}
