/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface OneDashboardPageWidgetAreaChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetAreaChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetAreaChartStylesGradientOutputReference | OneDashboardPageWidgetAreaChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetAreaChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetAreaChartStylesGradientOutputReference | OneDashboardPageWidgetAreaChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetAreaChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetAreaChartStylesGradient;
}

export function oneDashboardPageWidgetAreaChartStylesToTerraform(struct?: OneDashboardPageWidgetAreaChartStylesOutputReference | OneDashboardPageWidgetAreaChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetAreaChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetAreaChartStylesToHclTerraform(struct?: OneDashboardPageWidgetAreaChartStylesOutputReference | OneDashboardPageWidgetAreaChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetAreaChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetAreaChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetAreaChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetAreaColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetAreaColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetAreaColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetAreaColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetAreaColorsToTerraform(struct?: OneDashboardPageWidgetAreaColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetAreaColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaColorsToHclTerraform(struct?: OneDashboardPageWidgetAreaColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetAreaColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetAreaColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaColorsOutputReference {
    return new OneDashboardPageWidgetAreaColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetAreaDataFormatToTerraform(struct?: OneDashboardPageWidgetAreaDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetAreaDataFormatToHclTerraform(struct?: OneDashboardPageWidgetAreaDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetAreaDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaDataFormatOutputReference {
    return new OneDashboardPageWidgetAreaDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetAreaInitialSortingToTerraform(struct?: OneDashboardPageWidgetAreaInitialSortingOutputReference | OneDashboardPageWidgetAreaInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetAreaInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetAreaInitialSortingOutputReference | OneDashboardPageWidgetAreaInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetAreaNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetAreaNrqlQueryToTerraform(struct?: OneDashboardPageWidgetAreaNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetAreaNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetAreaNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetAreaNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaNrqlQueryOutputReference {
    return new OneDashboardPageWidgetAreaNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetAreaNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetAreaNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetAreaNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetAreaNullValuesToTerraform(struct?: OneDashboardPageWidgetAreaNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetAreaNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaNullValuesToHclTerraform(struct?: OneDashboardPageWidgetAreaNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetAreaNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetAreaNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaNullValuesOutputReference {
    return new OneDashboardPageWidgetAreaNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaTooltip {
  /**
  * Tooltip display mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#mode OneDashboard#mode}
  */
  readonly mode: string;
}

export function oneDashboardPageWidgetAreaTooltipToTerraform(struct?: OneDashboardPageWidgetAreaTooltipOutputReference | OneDashboardPageWidgetAreaTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function oneDashboardPageWidgetAreaTooltipToHclTerraform(struct?: OneDashboardPageWidgetAreaTooltipOutputReference | OneDashboardPageWidgetAreaTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaTooltipOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface OneDashboardPageWidgetAreaUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetAreaUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetAreaUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetAreaUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetAreaUnitsToTerraform(struct?: OneDashboardPageWidgetAreaUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetAreaUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaUnitsToHclTerraform(struct?: OneDashboardPageWidgetAreaUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetAreaUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetAreaUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetAreaUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaUnitsOutputReference {
    return new OneDashboardPageWidgetAreaUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetAreaChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetAreaColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetAreaDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetAreaInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetAreaNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetAreaNullValues[] | cdktn.IResolvable;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#tooltip OneDashboard#tooltip}
  */
  readonly tooltip?: OneDashboardPageWidgetAreaTooltip;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetAreaUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetAreaToTerraform(struct?: OneDashboardPageWidgetArea | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetAreaChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetAreaColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetAreaDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetAreaInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetAreaNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetAreaNullValuesToTerraform, true)(struct!.nullValues),
    tooltip: oneDashboardPageWidgetAreaTooltipToTerraform(struct!.tooltip),
    units: cdktn.listMapper(oneDashboardPageWidgetAreaUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetAreaToHclTerraform(struct?: OneDashboardPageWidgetArea | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetAreaChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetAreaInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNullValuesList",
    },
    tooltip: {
      value: oneDashboardPageWidgetAreaTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaTooltipList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetAreaUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetArea | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetArea | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._tooltip.internalValue = value.tooltip;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetAreaChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetAreaChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetAreaColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetAreaColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetAreaDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetAreaDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetAreaInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetAreaInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetAreaNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetAreaNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetAreaNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetAreaNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new OneDashboardPageWidgetAreaTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: OneDashboardPageWidgetAreaTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetAreaUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetAreaUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetAreaList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetArea[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetAreaOutputReference {
    return new OneDashboardPageWidgetAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBarChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetBarChartStylesGradientOutputReference | OneDashboardPageWidgetBarChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetBarChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetBarChartStylesGradientOutputReference | OneDashboardPageWidgetBarChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBarChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetBarChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetBarChartStylesGradient;
}

export function oneDashboardPageWidgetBarChartStylesToTerraform(struct?: OneDashboardPageWidgetBarChartStylesOutputReference | OneDashboardPageWidgetBarChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetBarChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetBarChartStylesToHclTerraform(struct?: OneDashboardPageWidgetBarChartStylesOutputReference | OneDashboardPageWidgetBarChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetBarChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBarChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetBarChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetBarChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetBarColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBarColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBarColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBarColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBarColorsToTerraform(struct?: OneDashboardPageWidgetBarColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBarColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarColorsToHclTerraform(struct?: OneDashboardPageWidgetBarColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBarColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBarColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarColorsOutputReference {
    return new OneDashboardPageWidgetBarColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBarDataFormatToTerraform(struct?: OneDashboardPageWidgetBarDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetBarDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBarDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetBarDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarDataFormatOutputReference {
    return new OneDashboardPageWidgetBarDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBarInitialSortingToTerraform(struct?: OneDashboardPageWidgetBarInitialSortingOutputReference | OneDashboardPageWidgetBarInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBarInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBarInitialSortingOutputReference | OneDashboardPageWidgetBarInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBarInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetBarNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBarNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBarNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBarNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBarNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetBarNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBarNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBarNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBarNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBarNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBarNullValuesToTerraform(struct?: OneDashboardPageWidgetBarNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBarNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBarNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBarNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBarNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarNullValuesOutputReference {
    return new OneDashboardPageWidgetBarNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBarUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBarUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetBarUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBarUnitsToTerraform(struct?: OneDashboardPageWidgetBarUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBarUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarUnitsToHclTerraform(struct?: OneDashboardPageWidgetBarUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBarUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBarUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBarUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBarUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarUnitsOutputReference {
    return new OneDashboardPageWidgetBarUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetBarChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBarColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBarDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBarInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBarNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBarNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBarUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBarToTerraform(struct?: OneDashboardPageWidgetBar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    filter_current_dashboard: cdktn.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    linked_entity_guids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.linkedEntityGuids),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetBarChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetBarColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetBarDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBarInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetBarNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetBarNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetBarUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBarToHclTerraform(struct?: OneDashboardPageWidgetBar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_current_dashboard: {
      value: cdktn.booleanToHclTerraform(struct!.filterCurrentDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linked_entity_guids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.linkedEntityGuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetBarChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBarInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBarUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBar | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._filterCurrentDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCurrentDashboard = this._filterCurrentDashboard;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._linkedEntityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedEntityGuids = this._linkedEntityGuids;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBar | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._filterCurrentDashboard = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._linkedEntityGuids = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._filterCurrentDashboard = value.filterCurrentDashboard;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._linkedEntityGuids = value.linkedEntityGuids;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // filter_current_dashboard - computed: false, optional: true, required: false
  private _filterCurrentDashboard?: boolean | cdktn.IResolvable; 
  public get filterCurrentDashboard() {
    return this.getBooleanAttribute('filter_current_dashboard');
  }
  public set filterCurrentDashboard(value: boolean | cdktn.IResolvable) {
    this._filterCurrentDashboard = value;
  }
  public resetFilterCurrentDashboard() {
    this._filterCurrentDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCurrentDashboardInput() {
    return this._filterCurrentDashboard;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // linked_entity_guids - computed: true, optional: true, required: false
  private _linkedEntityGuids?: string[]; 
  public get linkedEntityGuids() {
    return this.getListAttribute('linked_entity_guids');
  }
  public set linkedEntityGuids(value: string[]) {
    this._linkedEntityGuids = value;
  }
  public resetLinkedEntityGuids() {
    this._linkedEntityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedEntityGuidsInput() {
    return this._linkedEntityGuids;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetBarChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetBarChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetBarColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBarColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetBarDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBarDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetBarInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBarInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetBarNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBarNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBarNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBarNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetBarUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBarUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetBarList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBar[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBarOutputReference {
    return new OneDashboardPageWidgetBarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsGridOptions {
  /**
  * Number of columns in the grid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#columns OneDashboard#columns}
  */
  readonly columns?: number;
  /**
  * Grid label setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#label OneDashboard#label}
  */
  readonly label?: number;
  /**
  * Grid value setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#value OneDashboard#value}
  */
  readonly value?: number;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsGridOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktn.numberToTerraform(struct!.columns),
    label: cdktn.numberToTerraform(struct!.label),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsGridOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktn.numberToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktn.numberToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsGridOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: number; 
  public get columns() {
    return this.getNumberAttribute('columns');
  }
  public set columns(value: number) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // label - computed: false, optional: true, required: false
  private _label?: number; 
  public get label() {
    return this.getNumberAttribute('label');
  }
  public set label(value: number) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsLink {
  /**
  * Whether to open the link in a new tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#new_tab OneDashboard#new_tab}
  */
  readonly newTab?: boolean | cdktn.IResolvable;
  /**
  * The title for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title?: string;
  /**
  * The URL for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#url OneDashboard#url}
  */
  readonly url?: string;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsLinkToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    title: cdktn.stringToTerraform(struct!.title),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsLinkToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newTab = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newTab = value.newTab;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // new_tab - computed: false, optional: true, required: false
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  public resetNewTab() {
    this._newTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsVisual {
  /**
  * Billboard alignment type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#alignment OneDashboard#alignment}
  */
  readonly alignment?: string;
  /**
  * Billboard display type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#display OneDashboard#display}
  */
  readonly display?: string;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsVisualToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsVisual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment: cdktn.stringToTerraform(struct!.alignment),
    display: cdktn.stringToTerraform(struct!.display),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsVisualToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsVisual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment: {
      value: cdktn.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktn.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsVisual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alignment = undefined;
      this._display = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alignment = value.alignment;
      this._display = value.display;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettings {
  /**
  * grid_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#grid_options OneDashboard#grid_options}
  */
  readonly gridOptions?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#link OneDashboard#link}
  */
  readonly link?: OneDashboardPageWidgetBillboardBillboardSettingsLink;
  /**
  * visual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#visual OneDashboard#visual}
  */
  readonly visual?: OneDashboardPageWidgetBillboardBillboardSettingsVisual;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsOutputReference | OneDashboardPageWidgetBillboardBillboardSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_options: oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToTerraform(struct!.gridOptions),
    link: oneDashboardPageWidgetBillboardBillboardSettingsLinkToTerraform(struct!.link),
    visual: oneDashboardPageWidgetBillboardBillboardSettingsVisualToTerraform(struct!.visual),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsOutputReference | OneDashboardPageWidgetBillboardBillboardSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grid_options: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToHclTerraform(struct!.gridOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsList",
    },
    link: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsLinkToHclTerraform(struct!.link),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsLinkList",
    },
    visual: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsVisualToHclTerraform(struct!.visual),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsVisualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridOptions = this._gridOptions?.internalValue;
    }
    if (this._link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link?.internalValue;
    }
    if (this._visual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visual = this._visual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gridOptions.internalValue = undefined;
      this._link.internalValue = undefined;
      this._visual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gridOptions.internalValue = value.gridOptions;
      this._link.internalValue = value.link;
      this._visual.internalValue = value.visual;
    }
  }

  // grid_options - computed: false, optional: true, required: false
  private _gridOptions = new OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference(this, "grid_options");
  public get gridOptions() {
    return this._gridOptions;
  }
  public putGridOptions(value: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions) {
    this._gridOptions.internalValue = value;
  }
  public resetGridOptions() {
    this._gridOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridOptionsInput() {
    return this._gridOptions.internalValue;
  }

  // link - computed: false, optional: true, required: false
  private _link = new OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: OneDashboardPageWidgetBillboardBillboardSettingsLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // visual - computed: false, optional: true, required: false
  private _visual = new OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference(this, "visual");
  public get visual() {
    return this._visual;
  }
  public putVisual(value: OneDashboardPageWidgetBillboardBillboardSettingsVisual) {
    this._visual.internalValue = value;
  }
  public resetVisual() {
    this._visual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualInput() {
    return this._visual.internalValue;
  }
}
export interface OneDashboardPageWidgetBillboardChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBillboardChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetBillboardChartStylesGradientOutputReference | OneDashboardPageWidgetBillboardChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetBillboardChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetBillboardChartStylesGradientOutputReference | OneDashboardPageWidgetBillboardChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetBillboardChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetBillboardChartStylesGradient;
}

export function oneDashboardPageWidgetBillboardChartStylesToTerraform(struct?: OneDashboardPageWidgetBillboardChartStylesOutputReference | OneDashboardPageWidgetBillboardChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetBillboardChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetBillboardChartStylesToHclTerraform(struct?: OneDashboardPageWidgetBillboardChartStylesOutputReference | OneDashboardPageWidgetBillboardChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetBillboardChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetBillboardChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetBillboardChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetBillboardColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBillboardColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBillboardColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBillboardColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBillboardColorsToTerraform(struct?: OneDashboardPageWidgetBillboardColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBillboardColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardColorsToHclTerraform(struct?: OneDashboardPageWidgetBillboardColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBillboardColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBillboardColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardColorsOutputReference {
    return new OneDashboardPageWidgetBillboardColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBillboardDataFormatToTerraform(struct?: OneDashboardPageWidgetBillboardDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetBillboardDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBillboardDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetBillboardDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardDataFormatOutputReference {
    return new OneDashboardPageWidgetBillboardDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBillboardInitialSortingToTerraform(struct?: OneDashboardPageWidgetBillboardInitialSortingOutputReference | OneDashboardPageWidgetBillboardInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBillboardInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBillboardInitialSortingOutputReference | OneDashboardPageWidgetBillboardInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetBillboardNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBillboardNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBillboardNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBillboardNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBillboardNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetBillboardNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBillboardNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBillboardNullValuesToTerraform(struct?: OneDashboardPageWidgetBillboardNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBillboardNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBillboardNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardNullValuesOutputReference {
    return new OneDashboardPageWidgetBillboardNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBillboardUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBillboardUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetBillboardUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBillboardUnitsToTerraform(struct?: OneDashboardPageWidgetBillboardUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBillboardUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardUnitsToHclTerraform(struct?: OneDashboardPageWidgetBillboardUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBillboardUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBillboardUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardUnitsOutputReference {
    return new OneDashboardPageWidgetBillboardUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * The critical threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#critical OneDashboard#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * The warning threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#warning OneDashboard#warning}
  */
  readonly warning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * billboard_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#billboard_settings OneDashboard#billboard_settings}
  */
  readonly billboardSettings?: OneDashboardPageWidgetBillboardBillboardSettings;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetBillboardChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBillboardColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBillboardDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBillboardInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBillboardNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBillboardUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBillboardToTerraform(struct?: OneDashboardPageWidgetBillboard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    critical: cdktn.stringToTerraform(struct!.critical),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    warning: cdktn.stringToTerraform(struct!.warning),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    billboard_settings: oneDashboardPageWidgetBillboardBillboardSettingsToTerraform(struct!.billboardSettings),
    chart_styles: oneDashboardPageWidgetBillboardChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetBillboardColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetBillboardDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBillboardInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetBillboardNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetBillboardNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetBillboardUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBillboardToHclTerraform(struct?: OneDashboardPageWidgetBillboard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical: {
      value: cdktn.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning: {
      value: cdktn.stringToHclTerraform(struct!.warning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    billboard_settings: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsToHclTerraform(struct!.billboardSettings),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsList",
    },
    chart_styles: {
      value: oneDashboardPageWidgetBillboardChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBillboardInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBillboardUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBillboard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._billboardSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billboardSettings = this._billboardSettings?.internalValue;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._critical = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._warning = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._billboardSettings.internalValue = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._critical = value.critical;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._warning = value.warning;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._billboardSettings.internalValue = value.billboardSettings;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // billboard_settings - computed: false, optional: true, required: false
  private _billboardSettings = new OneDashboardPageWidgetBillboardBillboardSettingsOutputReference(this, "billboard_settings");
  public get billboardSettings() {
    return this._billboardSettings;
  }
  public putBillboardSettings(value: OneDashboardPageWidgetBillboardBillboardSettings) {
    this._billboardSettings.internalValue = value;
  }
  public resetBillboardSettings() {
    this._billboardSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billboardSettingsInput() {
    return this._billboardSettings.internalValue;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetBillboardChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetBillboardChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetBillboardColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBillboardColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetBillboardDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBillboardDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetBillboardInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBillboardInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetBillboardNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBillboardNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBillboardNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBillboardNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetBillboardUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBillboardUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetBillboardList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBillboardOutputReference {
    return new OneDashboardPageWidgetBillboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBulletChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetBulletChartStylesGradientOutputReference | OneDashboardPageWidgetBulletChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetBulletChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetBulletChartStylesGradientOutputReference | OneDashboardPageWidgetBulletChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBulletChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetBulletChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetBulletChartStylesGradient;
}

export function oneDashboardPageWidgetBulletChartStylesToTerraform(struct?: OneDashboardPageWidgetBulletChartStylesOutputReference | OneDashboardPageWidgetBulletChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetBulletChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetBulletChartStylesToHclTerraform(struct?: OneDashboardPageWidgetBulletChartStylesOutputReference | OneDashboardPageWidgetBulletChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetBulletChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBulletChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetBulletChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetBulletChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetBulletColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBulletColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBulletColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBulletColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBulletColorsToTerraform(struct?: OneDashboardPageWidgetBulletColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBulletColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletColorsToHclTerraform(struct?: OneDashboardPageWidgetBulletColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBulletColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBulletColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletColorsOutputReference {
    return new OneDashboardPageWidgetBulletColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBulletDataFormatToTerraform(struct?: OneDashboardPageWidgetBulletDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetBulletDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBulletDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetBulletDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletDataFormatOutputReference {
    return new OneDashboardPageWidgetBulletDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBulletInitialSortingToTerraform(struct?: OneDashboardPageWidgetBulletInitialSortingOutputReference | OneDashboardPageWidgetBulletInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBulletInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBulletInitialSortingOutputReference | OneDashboardPageWidgetBulletInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBulletInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetBulletNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBulletNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBulletNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBulletNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBulletNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetBulletNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBulletNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBulletNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBulletNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetBulletNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBulletNullValuesToTerraform(struct?: OneDashboardPageWidgetBulletNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBulletNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBulletNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBulletNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBulletNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletNullValuesOutputReference {
    return new OneDashboardPageWidgetBulletNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBulletUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBulletUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetBulletUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBulletUnitsToTerraform(struct?: OneDashboardPageWidgetBulletUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetBulletUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletUnitsToHclTerraform(struct?: OneDashboardPageWidgetBulletUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBulletUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBulletUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetBulletUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetBulletUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletUnitsOutputReference {
    return new OneDashboardPageWidgetBulletUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBullet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * The maximum value for the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#limit OneDashboard#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetBulletChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBulletColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBulletDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBulletInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBulletNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBulletNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBulletUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetBulletToTerraform(struct?: OneDashboardPageWidgetBullet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    limit: cdktn.numberToTerraform(struct!.limit),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetBulletChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetBulletColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetBulletDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBulletInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetBulletNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetBulletNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetBulletUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBulletToHclTerraform(struct?: OneDashboardPageWidgetBullet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetBulletChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBulletInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetBulletUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetBullet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBullet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._limit = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._limit = value.limit;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetBulletChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetBulletChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetBulletColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBulletColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetBulletDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBulletDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetBulletInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBulletInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetBulletNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBulletNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBulletNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBulletNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetBulletUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBulletUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetBulletList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetBullet[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetBulletOutputReference {
    return new OneDashboardPageWidgetBulletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetFunnelChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetFunnelChartStylesGradientOutputReference | OneDashboardPageWidgetFunnelChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetFunnelChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetFunnelChartStylesGradientOutputReference | OneDashboardPageWidgetFunnelChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetFunnelChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetFunnelChartStylesGradient;
}

export function oneDashboardPageWidgetFunnelChartStylesToTerraform(struct?: OneDashboardPageWidgetFunnelChartStylesOutputReference | OneDashboardPageWidgetFunnelChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetFunnelChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetFunnelChartStylesToHclTerraform(struct?: OneDashboardPageWidgetFunnelChartStylesOutputReference | OneDashboardPageWidgetFunnelChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetFunnelChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetFunnelChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetFunnelChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetFunnelColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetFunnelColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetFunnelColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetFunnelColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetFunnelColorsToTerraform(struct?: OneDashboardPageWidgetFunnelColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetFunnelColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelColorsToHclTerraform(struct?: OneDashboardPageWidgetFunnelColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetFunnelColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetFunnelColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelColorsOutputReference {
    return new OneDashboardPageWidgetFunnelColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetFunnelDataFormatToTerraform(struct?: OneDashboardPageWidgetFunnelDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetFunnelDataFormatToHclTerraform(struct?: OneDashboardPageWidgetFunnelDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetFunnelDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelDataFormatOutputReference {
    return new OneDashboardPageWidgetFunnelDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetFunnelInitialSortingToTerraform(struct?: OneDashboardPageWidgetFunnelInitialSortingOutputReference | OneDashboardPageWidgetFunnelInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetFunnelInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetFunnelInitialSortingOutputReference | OneDashboardPageWidgetFunnelInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetFunnelNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetFunnelNrqlQueryToTerraform(struct?: OneDashboardPageWidgetFunnelNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetFunnelNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetFunnelNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetFunnelNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelNrqlQueryOutputReference {
    return new OneDashboardPageWidgetFunnelNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetFunnelNullValuesToTerraform(struct?: OneDashboardPageWidgetFunnelNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelNullValuesToHclTerraform(struct?: OneDashboardPageWidgetFunnelNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetFunnelNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelNullValuesOutputReference {
    return new OneDashboardPageWidgetFunnelNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetFunnelUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetFunnelUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetFunnelUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetFunnelUnitsToTerraform(struct?: OneDashboardPageWidgetFunnelUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetFunnelUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelUnitsToHclTerraform(struct?: OneDashboardPageWidgetFunnelUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnelUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetFunnelUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetFunnelUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelUnitsOutputReference {
    return new OneDashboardPageWidgetFunnelUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetFunnelChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetFunnelColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetFunnelDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetFunnelInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetFunnelNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetFunnelUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetFunnelToTerraform(struct?: OneDashboardPageWidgetFunnel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetFunnelChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetFunnelColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetFunnelDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetFunnelInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetFunnelNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetFunnelNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetFunnelUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetFunnelToHclTerraform(struct?: OneDashboardPageWidgetFunnel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetFunnelChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetFunnelInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetFunnelUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetFunnel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetFunnel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetFunnelChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetFunnelChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetFunnelColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetFunnelColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetFunnelDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetFunnelDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetFunnelInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetFunnelInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetFunnelNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetFunnelNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetFunnelNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetFunnelNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetFunnelUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetFunnelUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetFunnelList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnel[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetFunnelOutputReference {
    return new OneDashboardPageWidgetFunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHeatmapChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetHeatmapChartStylesGradientOutputReference | OneDashboardPageWidgetHeatmapChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetHeatmapChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetHeatmapChartStylesGradientOutputReference | OneDashboardPageWidgetHeatmapChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetHeatmapChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetHeatmapChartStylesGradient;
}

export function oneDashboardPageWidgetHeatmapChartStylesToTerraform(struct?: OneDashboardPageWidgetHeatmapChartStylesOutputReference | OneDashboardPageWidgetHeatmapChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetHeatmapChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetHeatmapChartStylesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapChartStylesOutputReference | OneDashboardPageWidgetHeatmapChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetHeatmapChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetHeatmapChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetHeatmapChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetHeatmapColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHeatmapColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHeatmapColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetHeatmapColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHeatmapColorsToTerraform(struct?: OneDashboardPageWidgetHeatmapColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHeatmapColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapColorsToHclTerraform(struct?: OneDashboardPageWidgetHeatmapColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHeatmapColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapColorsOutputReference {
    return new OneDashboardPageWidgetHeatmapColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetHeatmapDataFormatToTerraform(struct?: OneDashboardPageWidgetHeatmapDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetHeatmapDataFormatToHclTerraform(struct?: OneDashboardPageWidgetHeatmapDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetHeatmapDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapDataFormatOutputReference {
    return new OneDashboardPageWidgetHeatmapDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetHeatmapInitialSortingToTerraform(struct?: OneDashboardPageWidgetHeatmapInitialSortingOutputReference | OneDashboardPageWidgetHeatmapInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetHeatmapInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetHeatmapInitialSortingOutputReference | OneDashboardPageWidgetHeatmapInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetHeatmapNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHeatmapNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHeatmapNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetHeatmapNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetHeatmapNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapNrqlQueryOutputReference {
    return new OneDashboardPageWidgetHeatmapNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHeatmapNullValuesToTerraform(struct?: OneDashboardPageWidgetHeatmapNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapNullValuesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHeatmapNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapNullValuesOutputReference {
    return new OneDashboardPageWidgetHeatmapNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHeatmapUnitsToTerraform(struct?: OneDashboardPageWidgetHeatmapUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapUnitsToHclTerraform(struct?: OneDashboardPageWidgetHeatmapUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmapUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHeatmapUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapUnitsOutputReference {
    return new OneDashboardPageWidgetHeatmapUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetHeatmapChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetHeatmapColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetHeatmapDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetHeatmapInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetHeatmapNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetHeatmapUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHeatmapToTerraform(struct?: OneDashboardPageWidgetHeatmap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    filter_current_dashboard: cdktn.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    linked_entity_guids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.linkedEntityGuids),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetHeatmapChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetHeatmapColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetHeatmapDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetHeatmapInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetHeatmapNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetHeatmapNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetHeatmapUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetHeatmapToHclTerraform(struct?: OneDashboardPageWidgetHeatmap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_current_dashboard: {
      value: cdktn.booleanToHclTerraform(struct!.filterCurrentDashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linked_entity_guids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.linkedEntityGuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetHeatmapChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetHeatmapInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHeatmapUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._filterCurrentDashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCurrentDashboard = this._filterCurrentDashboard;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._linkedEntityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedEntityGuids = this._linkedEntityGuids;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHeatmap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._filterCurrentDashboard = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._linkedEntityGuids = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._filterCurrentDashboard = value.filterCurrentDashboard;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._linkedEntityGuids = value.linkedEntityGuids;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // filter_current_dashboard - computed: false, optional: true, required: false
  private _filterCurrentDashboard?: boolean | cdktn.IResolvable; 
  public get filterCurrentDashboard() {
    return this.getBooleanAttribute('filter_current_dashboard');
  }
  public set filterCurrentDashboard(value: boolean | cdktn.IResolvable) {
    this._filterCurrentDashboard = value;
  }
  public resetFilterCurrentDashboard() {
    this._filterCurrentDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCurrentDashboardInput() {
    return this._filterCurrentDashboard;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // linked_entity_guids - computed: true, optional: true, required: false
  private _linkedEntityGuids?: string[]; 
  public get linkedEntityGuids() {
    return this.getListAttribute('linked_entity_guids');
  }
  public set linkedEntityGuids(value: string[]) {
    this._linkedEntityGuids = value;
  }
  public resetLinkedEntityGuids() {
    this._linkedEntityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedEntityGuidsInput() {
    return this._linkedEntityGuids;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetHeatmapChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetHeatmapChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetHeatmapColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetHeatmapColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetHeatmapDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetHeatmapDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetHeatmapInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetHeatmapInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetHeatmapNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetHeatmapNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetHeatmapNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetHeatmapUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetHeatmapUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetHeatmapList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmap[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHeatmapOutputReference {
    return new OneDashboardPageWidgetHeatmapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHistogramChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetHistogramChartStylesGradientOutputReference | OneDashboardPageWidgetHistogramChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetHistogramChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetHistogramChartStylesGradientOutputReference | OneDashboardPageWidgetHistogramChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetHistogramChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetHistogramChartStylesGradient;
}

export function oneDashboardPageWidgetHistogramChartStylesToTerraform(struct?: OneDashboardPageWidgetHistogramChartStylesOutputReference | OneDashboardPageWidgetHistogramChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetHistogramChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetHistogramChartStylesToHclTerraform(struct?: OneDashboardPageWidgetHistogramChartStylesOutputReference | OneDashboardPageWidgetHistogramChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetHistogramChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetHistogramChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetHistogramChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetHistogramColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHistogramColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHistogramColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetHistogramColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHistogramColorsToTerraform(struct?: OneDashboardPageWidgetHistogramColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHistogramColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramColorsToHclTerraform(struct?: OneDashboardPageWidgetHistogramColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHistogramColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHistogramColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramColorsOutputReference {
    return new OneDashboardPageWidgetHistogramColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetHistogramDataFormatToTerraform(struct?: OneDashboardPageWidgetHistogramDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetHistogramDataFormatToHclTerraform(struct?: OneDashboardPageWidgetHistogramDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetHistogramDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramDataFormatOutputReference {
    return new OneDashboardPageWidgetHistogramDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetHistogramInitialSortingToTerraform(struct?: OneDashboardPageWidgetHistogramInitialSortingOutputReference | OneDashboardPageWidgetHistogramInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetHistogramInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetHistogramInitialSortingOutputReference | OneDashboardPageWidgetHistogramInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetHistogramNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHistogramNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHistogramNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetHistogramNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetHistogramNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetHistogramNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramNrqlQueryOutputReference {
    return new OneDashboardPageWidgetHistogramNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHistogramNullValuesToTerraform(struct?: OneDashboardPageWidgetHistogramNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramNullValuesToHclTerraform(struct?: OneDashboardPageWidgetHistogramNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHistogramNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramNullValuesOutputReference {
    return new OneDashboardPageWidgetHistogramNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetHistogramUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetHistogramUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetHistogramUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHistogramUnitsToTerraform(struct?: OneDashboardPageWidgetHistogramUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetHistogramUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramUnitsToHclTerraform(struct?: OneDashboardPageWidgetHistogramUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogramUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetHistogramUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetHistogramUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramUnitsOutputReference {
    return new OneDashboardPageWidgetHistogramUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetHistogramChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetHistogramColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetHistogramDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetHistogramInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetHistogramNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetHistogramUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetHistogramToTerraform(struct?: OneDashboardPageWidgetHistogram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetHistogramChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetHistogramColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetHistogramDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetHistogramInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetHistogramNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetHistogramNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetHistogramUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetHistogramToHclTerraform(struct?: OneDashboardPageWidgetHistogram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetHistogramChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetHistogramInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetHistogramUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetHistogram | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetHistogram | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetHistogramChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetHistogramChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetHistogramColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetHistogramColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetHistogramDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetHistogramDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetHistogramInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetHistogramInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetHistogramNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetHistogramNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetHistogramNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetHistogramNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetHistogramUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetHistogramUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetHistogramList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogram[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetHistogramOutputReference {
    return new OneDashboardPageWidgetHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetJsonChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetJsonChartStylesGradientOutputReference | OneDashboardPageWidgetJsonChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetJsonChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetJsonChartStylesGradientOutputReference | OneDashboardPageWidgetJsonChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetJsonChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetJsonChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetJsonChartStylesGradient;
}

export function oneDashboardPageWidgetJsonChartStylesToTerraform(struct?: OneDashboardPageWidgetJsonChartStylesOutputReference | OneDashboardPageWidgetJsonChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetJsonChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetJsonChartStylesToHclTerraform(struct?: OneDashboardPageWidgetJsonChartStylesOutputReference | OneDashboardPageWidgetJsonChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetJsonChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetJsonChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetJsonChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetJsonChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetJsonColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetJsonColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetJsonColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetJsonColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetJsonColorsToTerraform(struct?: OneDashboardPageWidgetJsonColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetJsonColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonColorsToHclTerraform(struct?: OneDashboardPageWidgetJsonColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetJsonColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetJsonColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonColorsOutputReference {
    return new OneDashboardPageWidgetJsonColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetJsonDataFormatToTerraform(struct?: OneDashboardPageWidgetJsonDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetJsonDataFormatToHclTerraform(struct?: OneDashboardPageWidgetJsonDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetJsonDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonDataFormatOutputReference {
    return new OneDashboardPageWidgetJsonDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetJsonInitialSortingToTerraform(struct?: OneDashboardPageWidgetJsonInitialSortingOutputReference | OneDashboardPageWidgetJsonInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetJsonInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetJsonInitialSortingOutputReference | OneDashboardPageWidgetJsonInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetJsonInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetJsonNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetJsonNrqlQueryToTerraform(struct?: OneDashboardPageWidgetJsonNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetJsonNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetJsonNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetJsonNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonNrqlQueryOutputReference {
    return new OneDashboardPageWidgetJsonNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetJsonNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetJsonNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesName = value.seriesName;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetJsonNullValuesSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetJsonNullValuesToTerraform(struct?: OneDashboardPageWidgetJsonNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktn.stringToTerraform(struct!.nullValue),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetJsonNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonNullValuesToHclTerraform(struct?: OneDashboardPageWidgetJsonNullValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_value: {
      value: cdktn.stringToHclTerraform(struct!.nullValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonNullValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonNullValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValue = this._nullValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonNullValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nullValue = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nullValue = value.nullValue;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string; 
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetJsonNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetJsonNullValuesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNullValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonNullValuesOutputReference {
    return new OneDashboardPageWidgetJsonNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetJsonUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetJsonUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seriesName = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seriesName = value.seriesName;
      this._unit = value.unit;
    }
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class OneDashboardPageWidgetJsonUnitsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetJsonUnitsToTerraform(struct?: OneDashboardPageWidgetJsonUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetJsonUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonUnitsToHclTerraform(struct?: OneDashboardPageWidgetJsonUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJsonUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJsonUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetJsonUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetJsonUnitsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonUnits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonUnitsOutputReference {
    return new OneDashboardPageWidgetJsonUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * chart_styles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#chart_styles OneDashboard#chart_styles}
  */
  readonly chartStyles?: OneDashboardPageWidgetJsonChartStyles;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetJsonColors[] | cdktn.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetJsonDataFormat[] | cdktn.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetJsonInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetJsonNrqlQuery[] | cdktn.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetJsonNullValues[] | cdktn.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetJsonUnits[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetJsonToTerraform(struct?: OneDashboardPageWidgetJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.numberToTerraform(struct!.column),
    facet_show_other_series: cdktn.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktn.numberToTerraform(struct!.height),
    ignore_time_range: cdktn.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktn.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktn.stringToTerraform(struct!.refreshRate),
    row: cdktn.numberToTerraform(struct!.row),
    title: cdktn.stringToTerraform(struct!.title),
    width: cdktn.numberToTerraform(struct!.width),
    y_axis_left_max: cdktn.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktn.numberToTerraform(struct!.yAxisLeftMin),
    chart_styles: oneDashboardPageWidgetJsonChartStylesToTerraform(struct!.chartStyles),
    colors: cdktn.listMapper(oneDashboardPageWidgetJsonColorsToTerraform, true)(struct!.colors),
    data_format: cdktn.listMapper(oneDashboardPageWidgetJsonDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetJsonInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktn.listMapper(oneDashboardPageWidgetJsonNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktn.listMapper(oneDashboardPageWidgetJsonNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktn.listMapper(oneDashboardPageWidgetJsonUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetJsonToHclTerraform(struct?: OneDashboardPageWidgetJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facet_show_other_series: {
      value: cdktn.booleanToHclTerraform(struct!.facetShowOtherSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time_range: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legend_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.legendEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_rate: {
      value: cdktn.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row: {
      value: cdktn.numberToHclTerraform(struct!.row),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_max: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_left_min: {
      value: cdktn.numberToHclTerraform(struct!.yAxisLeftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_styles: {
      value: oneDashboardPageWidgetJsonChartStylesToHclTerraform(struct!.chartStyles),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonChartStylesList",
    },
    colors: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonColorsList",
    },
    data_format: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetJsonInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonInitialSortingList",
    },
    nrql_query: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNrqlQueryList",
    },
    null_values: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNullValuesList",
    },
    units: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetJsonUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._facetShowOtherSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetShowOtherSeries = this._facetShowOtherSeries;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._ignoreTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeRange = this._ignoreTimeRange;
    }
    if (this._legendEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendEnabled = this._legendEnabled;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._yAxisLeftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMax = this._yAxisLeftMax;
    }
    if (this._yAxisLeftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftMin = this._yAxisLeftMin;
    }
    if (this._chartStyles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartStyles = this._chartStyles?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._dataFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat?.internalValue;
    }
    if (this._initialSorting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSorting = this._initialSorting?.internalValue;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._nullValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._chartStyles.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._units.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._chartStyles.internalValue = value.chartStyles;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._units.internalValue = value.units;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // facet_show_other_series - computed: false, optional: true, required: false
  private _facetShowOtherSeries?: boolean | cdktn.IResolvable; 
  public get facetShowOtherSeries() {
    return this.getBooleanAttribute('facet_show_other_series');
  }
  public set facetShowOtherSeries(value: boolean | cdktn.IResolvable) {
    this._facetShowOtherSeries = value;
  }
  public resetFacetShowOtherSeries() {
    this._facetShowOtherSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetShowOtherSeriesInput() {
    return this._facetShowOtherSeries;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_time_range - computed: false, optional: true, required: false
  private _ignoreTimeRange?: boolean | cdktn.IResolvable; 
  public get ignoreTimeRange() {
    return this.getBooleanAttribute('ignore_time_range');
  }
  public set ignoreTimeRange(value: boolean | cdktn.IResolvable) {
    this._ignoreTimeRange = value;
  }
  public resetIgnoreTimeRange() {
    this._ignoreTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeRangeInput() {
    return this._ignoreTimeRange;
  }

  // legend_enabled - computed: false, optional: true, required: false
  private _legendEnabled?: boolean | cdktn.IResolvable; 
  public get legendEnabled() {
    return this.getBooleanAttribute('legend_enabled');
  }
  public set legendEnabled(value: boolean | cdktn.IResolvable) {
    this._legendEnabled = value;
  }
  public resetLegendEnabled() {
    this._legendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendEnabledInput() {
    return this._legendEnabled;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // row - computed: false, optional: false, required: true
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // y_axis_left_max - computed: false, optional: true, required: false
  private _yAxisLeftMax?: number; 
  public get yAxisLeftMax() {
    return this.getNumberAttribute('y_axis_left_max');
  }
  public set yAxisLeftMax(value: number) {
    this._yAxisLeftMax = value;
  }
  public resetYAxisLeftMax() {
    this._yAxisLeftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMaxInput() {
    return this._yAxisLeftMax;
  }

  // y_axis_left_min - computed: false, optional: true, required: false
  private _yAxisLeftMin?: number; 
  public get yAxisLeftMin() {
    return this.getNumberAttribute('y_axis_left_min');
  }
  public set yAxisLeftMin(value: number) {
    this._yAxisLeftMin = value;
  }
  public resetYAxisLeftMin() {
    this._yAxisLeftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftMinInput() {
    return this._yAxisLeftMin;
  }

  // chart_styles - computed: false, optional: true, required: false
  private _chartStyles = new OneDashboardPageWidgetJsonChartStylesOutputReference(this, "chart_styles");
  public get chartStyles() {
    return this._chartStyles;
  }
  public putChartStyles(value: OneDashboardPageWidgetJsonChartStyles) {
    this._chartStyles.internalValue = value;
  }
  public resetChartStyles() {
    this._chartStyles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartStylesInput() {
    return this._chartStyles.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetJsonColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetJsonColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat = new OneDashboardPageWidgetJsonDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetJsonDataFormat[] | cdktn.IResolvable) {
    this._dataFormat.internalValue = value;
  }
  public resetDataFormat() {
    this._dataFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat.internalValue;
  }

  // initial_sorting - computed: false, optional: true, required: false
  private _initialSorting = new OneDashboardPageWidgetJsonInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetJsonInitialSorting) {
    this._initialSorting.internalValue = value;
  }
  public resetInitialSorting() {
    this._initialSorting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSortingInput() {
    return this._initialSorting.internalValue;
  }

  // nrql_query - computed: false, optional: false, required: true
  private _nrqlQuery = new OneDashboardPageWidgetJsonNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetJsonNrqlQuery[] | cdktn.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetJsonNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetJsonNullValues[] | cdktn.IResolvable) {
    this._nullValues.internalValue = value;
  }
  public resetNullValues() {
    this._nullValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues.internalValue;
  }

  // units - computed: false, optional: true, required: false
  private _units = new OneDashboardPageWidgetJsonUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetJsonUnits[] | cdktn.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }
}

export class OneDashboardPageWidgetJsonList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetJson[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetJsonOutputReference {
    return new OneDashboardPageWidgetJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineChartStylesGradient {
  /**
  * Enable or disable gradient effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#enabled OneDashboard#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function oneDashboardPageWidgetLineChartStylesGradientToTerraform(struct?: OneDashboardPageWidgetLineChartStylesGradientOutputReference | OneDashboardPageWidgetLineChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function oneDashboardPageWidgetLineChartStylesGradientToHclTerraform(struct?: OneDashboardPageWidgetLineChartStylesGradientOutputReference | OneDashboardPageWidgetLineChartStylesGradient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineChartStylesGradientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineChartStylesGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineChartStylesGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OneDashboardPageWidgetLineChartStyles {
  /**
  * Line interpolation style. Valid values: 'linear', 'smooth', 'stepBefore', 'stepAfter'. Applicable to line widgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#line_interpolation OneDashboard#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#gradient OneDashboard#gradient}
  */
  readonly gradient?: OneDashboardPageWidgetLineChartStylesGradient;
}

export function oneDashboardPageWidgetLineChartStylesToTerraform(struct?: OneDashboardPageWidgetLineChartStylesOutputReference | OneDashboardPageWidgetLineChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktn.stringToTerraform(struct!.lineInterpolation),
    gradient: oneDashboardPageWidgetLineChartStylesGradientToTerraform(struct!.gradient),
  }
}


export function oneDashboardPageWidgetLineChartStylesToHclTerraform(struct?: OneDashboardPageWidgetLineChartStylesOutputReference | OneDashboardPageWidgetLineChartStyles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_interpolation: {
      value: cdktn.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gradient: {
      value: oneDashboardPageWidgetLineChartStylesGradientToHclTerraform(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineChartStylesGradientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineChartStylesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineChartStyles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineChartStyles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._gradient.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._gradient.internalValue = value.gradient;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new OneDashboardPageWidgetLineChartStylesGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: OneDashboardPageWidgetLineChartStylesGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }
}
export interface OneDashboardPageWidgetLineColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetLineColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetLineColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetLineColorsSeriesOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesName = value.seriesName;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }
}

export class OneDashboardPageWidgetLineColorsSeriesOverridesList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktn.IResolvable;
}

export function oneDashboardPageWidgetLineColorsToTerraform(struct?: OneDashboardPageWidgetLineColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    series_overrides: cdktn.listMapper(oneDashboardPageWidgetLineColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLineColorsToHclTerraform(struct?: OneDashboardPageWidgetLineColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_overrides: {
      value: cdktn.listMapperHcl(oneDashboardPageWidgetLineColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetLineColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._seriesOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._seriesOverrides.internalValue = value.seriesOverrides;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new OneDashboardPageWidgetLineColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktn.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }
}

export class OneDashboardPageWidgetLineColorsList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineColors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetLineColorsOutputReference {
    return new OneDashboardPageWidgetLineColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetLineDataFormatToTerraform(struct?: OneDashboardPageWidgetLineDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    precision: cdktn.numberToTerraform(struct!.precision),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function oneDashboardPageWidgetLineDataFormatToHclTerraform(struct?: OneDashboardPageWidgetLineDataFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktn.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineDataFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetLineDataFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineDataFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._precision = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._precision = value.precision;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OneDashboardPageWidgetLineDataFormatList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineDataFormat[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetLineDataFormatOutputReference {
    return new OneDashboardPageWidgetLineDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetLineInitialSortingToTerraform(struct?: OneDashboardPageWidgetLineInitialSortingOutputReference | OneDashboardPageWidgetLineInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetLineInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetLineInitialSortingOutputReference | OneDashboardPageWidgetLineInitialSorting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineInitialSortingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineInitialSorting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineInitialSorting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface OneDashboardPageWidgetLineNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetLineNrqlQueryToTerraform(struct?: OneDashboardPageWidgetLineNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetLineNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetLineNrqlQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineNrqlQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OneDashboardPageWidgetLineNrqlQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineNrqlQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._query = value.query;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class OneDashboardPageWidgetLineNrqlQueryList extends cdktn.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineNrqlQuery[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OneDashboardPageWidgetLineNrqlQueryOutputReference {
    return new OneDashboardPageWidgetLineNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
