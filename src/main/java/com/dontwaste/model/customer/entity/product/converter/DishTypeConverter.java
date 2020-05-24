package com.dontwaste.model.customer.entity.product.converter;

import com.dontwaste.model.customer.entity.product.productType.DishType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class DishTypeConverter implements AttributeConverter<DishType, Integer> {
    @Override
    public Integer convertToDatabaseColumn(DishType dishType) {
        return dishType == null ? null : dishType.getId();
    }

    @Override
    public DishType convertToEntityAttribute(Integer num) {
        return num == null ? null : DishType.getById(num);
    }
}
