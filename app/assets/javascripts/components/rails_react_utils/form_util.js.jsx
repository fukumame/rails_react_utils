class FormUtil {
  constructor (modelName) {
    this._modelName = modelName;
  }

  id (attribute) {
    return `${this._modelName}_${attribute}`
  }

  name (attribute) {
    return `${this._modelName}[${attribute}]`
  }

  static dataValidation(key='required', message='この項目は必須です') {
    return {'data-validation': key, 'data-validation-error-msg': message}
  }

}