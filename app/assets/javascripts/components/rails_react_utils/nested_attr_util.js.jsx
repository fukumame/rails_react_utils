class NestedAttrUtil extends React.Component {

  constructor(rootClassName, associationName){
    super();
    this._rootClassName = rootClassName;
    this._associationName = associationName;
  }

  attributeNameWIthIndex(index, attributeName) {
    return `${this._rootClassName}[${this._associationName}_attributes][${index}][${attributeName}]`
  }

  attributeName(attributeName) {
    return `${this._rootClassName}[${this._associationName}_attributes][${attributeName}]`
  }

  id(attributeName) {
    return `${this._rootClassName}_${this._associationName}_attributes_${attributeName}`
  }

  idWithIndex(index, attributeName) {
    return `${this._rootClassName}_${this._associationName}_attributes_${index}_${attributeName}`
  }

  hiddenDestroyTagWithIndex(index, value) {
    return (
      <input type="hidden" name={this.attributeNameWIthIndex(index, '_destroy')} value={value} />
    );
  }

  hiddenDestroyTag(value) {
    return (
        <input type="hidden" name={this.attributeName('_destroy')} value={value} />
    );
  }

  hiddenIdTag(value) {
    const setValue = value || '';
    return (
        <input type="hidden" name={this.attributeName('id')} value={setValue} />
    );
  }

  static isDestroyed(element) {
    return element.destroy && element.destroy == true
  }

  static destroyValue(element) {
    return this.isDestroyed(element) ? 'true' : 'false'
  }

  static setDestroy(element) {
    element.destroy = true;
  }

  static setDestroyAll(elememts) {
    elememts.forEach( (item) => {
      this.setDestroy(item);
    });
  }

  static removeDestroy(element) {
    element.destroy = false;
  }
}