/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SyntheticsStepMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * ID of the newrelic account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}
  */
  readonly accountId?: number;
  /**
  * The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#browsers SyntheticsStepMonitor#browsers}
  */
  readonly browsers?: string[];
  /**
  * The multiple devices list on which synthetic monitors will run. Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#devices SyntheticsStepMonitor#devices}
  */
  readonly devices?: string[];
  /**
  * Capture a screenshot during job execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}
  */
  readonly enableScreenshotOnFailureAndScript?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The public location(s) that the monitor will run jobs from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}
  */
  readonly locationsPublic?: string[];
  /**
  * The title of this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}
  */
  readonly name: string;
  /**
  * The interval at which this monitor should run. Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}
  */
  readonly period: string;
  /**
  * The runtime type that the monitor will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#runtime_type SyntheticsStepMonitor#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * The specific semver version of the runtime type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#runtime_type_version SyntheticsStepMonitor#runtime_type_version}
  */
  readonly runtimeTypeVersion?: string;
  /**
  * The monitor status (ENABLED or DISABLED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}
  */
  readonly status: string;
  /**
  * A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#use_unsupported_legacy_runtime SyntheticsStepMonitor#use_unsupported_legacy_runtime}
  */
  readonly useUnsupportedLegacyRuntime?: boolean | cdktn.IResolvable;
  /**
  * location_private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}
  */
  readonly locationPrivate?: SyntheticsStepMonitorLocationPrivate[] | cdktn.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}
  */
  readonly steps: SyntheticsStepMonitorSteps[] | cdktn.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}
  */
  readonly tag?: SyntheticsStepMonitorTag[] | cdktn.IResolvable;
}
export interface SyntheticsStepMonitorLocationPrivate {
  /**
  * The unique identifier for the Synthetics private location in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#guid SyntheticsStepMonitor#guid}
  */
  readonly guid: string;
  /**
  * The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#vse_password SyntheticsStepMonitor#vse_password}
  */
  readonly vsePassword?: string;
}

export function syntheticsStepMonitorLocationPrivateToTerraform(struct?: SyntheticsStepMonitorLocationPrivate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktn.stringToTerraform(struct!.guid),
    vse_password: cdktn.stringToTerraform(struct!.vsePassword),
  }
}


export function syntheticsStepMonitorLocationPrivateToHclTerraform(struct?: SyntheticsStepMonitorLocationPrivate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktn.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vse_password: {
      value: cdktn.stringToHclTerraform(struct!.vsePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsStepMonitorLocationPrivateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsStepMonitorLocationPrivate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._vsePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsePassword = this._vsePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsStepMonitorLocationPrivate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._vsePassword = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._vsePassword = value.vsePassword;
    }
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // vse_password - computed: false, optional: true, required: false
  private _vsePassword?: string; 
  public get vsePassword() {
    return this.getStringAttribute('vse_password');
  }
  public set vsePassword(value: string) {
    this._vsePassword = value;
  }
  public resetVsePassword() {
    this._vsePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsePasswordInput() {
    return this._vsePassword;
  }
}

export class SyntheticsStepMonitorLocationPrivateList extends cdktn.ComplexList {
  public internalValue? : SyntheticsStepMonitorLocationPrivate[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsStepMonitorLocationPrivateOutputReference {
    return new SyntheticsStepMonitorLocationPrivateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsStepMonitorSteps {
  /**
  * The position of the step within the script ranging from 0-100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#ordinal SyntheticsStepMonitor#ordinal}
  */
  readonly ordinal: number;
  /**
  * The type of step to be added to the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#type SyntheticsStepMonitor#type}
  */
  readonly type: string;
  /**
  * The metadata values related to the check the step performs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}
  */
  readonly values?: string[];
}

export function syntheticsStepMonitorStepsToTerraform(struct?: SyntheticsStepMonitorSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ordinal: cdktn.numberToTerraform(struct!.ordinal),
    type: cdktn.stringToTerraform(struct!.type),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function syntheticsStepMonitorStepsToHclTerraform(struct?: SyntheticsStepMonitorSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ordinal: {
      value: cdktn.numberToHclTerraform(struct!.ordinal),
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsStepMonitorStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsStepMonitorSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ordinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinal = this._ordinal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsStepMonitorSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ordinal = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ordinal = value.ordinal;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // ordinal - computed: false, optional: false, required: true
  private _ordinal?: number; 
  public get ordinal() {
    return this.getNumberAttribute('ordinal');
  }
  public set ordinal(value: number) {
    this._ordinal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalInput() {
    return this._ordinal;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SyntheticsStepMonitorStepsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsStepMonitorSteps[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsStepMonitorStepsOutputReference {
    return new SyntheticsStepMonitorStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsStepMonitorTag {
  /**
  * Name of the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#key SyntheticsStepMonitor#key}
  */
  readonly key: string;
  /**
  * Values associated with the tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}
  */
  readonly values: string[];
}

export function syntheticsStepMonitorTagToTerraform(struct?: SyntheticsStepMonitorTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function syntheticsStepMonitorTagToHclTerraform(struct?: SyntheticsStepMonitorTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsStepMonitorTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsStepMonitorTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsStepMonitorTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SyntheticsStepMonitorTagList extends cdktn.ComplexList {
  public internalValue? : SyntheticsStepMonitorTag[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsStepMonitorTagOutputReference {
    return new SyntheticsStepMonitorTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor}
*/
export class SyntheticsStepMonitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_step_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SyntheticsStepMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsStepMonitor to import
  * @param importFromId The id of the existing SyntheticsStepMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsStepMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_step_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsStepMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsStepMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_step_monitor',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.80.3',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._browsers = config.browsers;
    this._devices = config.devices;
    this._enableScreenshotOnFailureAndScript = config.enableScreenshotOnFailureAndScript;
    this._id = config.id;
    this._locationsPublic = config.locationsPublic;
    this._name = config.name;
    this._period = config.period;
    this._runtimeType = config.runtimeType;
    this._runtimeTypeVersion = config.runtimeTypeVersion;
    this._status = config.status;
    this._useUnsupportedLegacyRuntime = config.useUnsupportedLegacyRuntime;
    this._locationPrivate.internalValue = config.locationPrivate;
    this._steps.internalValue = config.steps;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // browsers - computed: false, optional: true, required: false
  private _browsers?: string[]; 
  public get browsers() {
    return cdktn.Fn.tolist(this.getListAttribute('browsers'));
  }
  public set browsers(value: string[]) {
    this._browsers = value;
  }
  public resetBrowsers() {
    this._browsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktn.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // enable_screenshot_on_failure_and_script - computed: false, optional: true, required: false
  private _enableScreenshotOnFailureAndScript?: boolean | cdktn.IResolvable; 
  public get enableScreenshotOnFailureAndScript() {
    return this.getBooleanAttribute('enable_screenshot_on_failure_and_script');
  }
  public set enableScreenshotOnFailureAndScript(value: boolean | cdktn.IResolvable) {
    this._enableScreenshotOnFailureAndScript = value;
  }
  public resetEnableScreenshotOnFailureAndScript() {
    this._enableScreenshotOnFailureAndScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScreenshotOnFailureAndScriptInput() {
    return this._enableScreenshotOnFailureAndScript;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // locations_public - computed: false, optional: true, required: false
  private _locationsPublic?: string[]; 
  public get locationsPublic() {
    return cdktn.Fn.tolist(this.getListAttribute('locations_public'));
  }
  public set locationsPublic(value: string[]) {
    this._locationsPublic = value;
  }
  public resetLocationsPublic() {
    this._locationsPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsPublicInput() {
    return this._locationsPublic;
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
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

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_in_minutes - computed: true, optional: false, required: false
  public get periodInMinutes() {
    return this.getNumberAttribute('period_in_minutes');
  }

  // runtime_type - computed: false, optional: true, required: false
  private _runtimeType?: string; 
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType;
  }

  // runtime_type_version - computed: false, optional: true, required: false
  private _runtimeTypeVersion?: string; 
  public get runtimeTypeVersion() {
    return this.getStringAttribute('runtime_type_version');
  }
  public set runtimeTypeVersion(value: string) {
    this._runtimeTypeVersion = value;
  }
  public resetRuntimeTypeVersion() {
    this._runtimeTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeVersionInput() {
    return this._runtimeTypeVersion;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // use_unsupported_legacy_runtime - computed: false, optional: true, required: false
  private _useUnsupportedLegacyRuntime?: boolean | cdktn.IResolvable; 
  public get useUnsupportedLegacyRuntime() {
    return this.getBooleanAttribute('use_unsupported_legacy_runtime');
  }
  public set useUnsupportedLegacyRuntime(value: boolean | cdktn.IResolvable) {
    this._useUnsupportedLegacyRuntime = value;
  }
  public resetUseUnsupportedLegacyRuntime() {
    this._useUnsupportedLegacyRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUnsupportedLegacyRuntimeInput() {
    return this._useUnsupportedLegacyRuntime;
  }

  // location_private - computed: false, optional: true, required: false
  private _locationPrivate = new SyntheticsStepMonitorLocationPrivateList(this, "location_private", true);
  public get locationPrivate() {
    return this._locationPrivate;
  }
  public putLocationPrivate(value: SyntheticsStepMonitorLocationPrivate[] | cdktn.IResolvable) {
    this._locationPrivate.internalValue = value;
  }
  public resetLocationPrivate() {
    this._locationPrivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPrivateInput() {
    return this._locationPrivate.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new SyntheticsStepMonitorStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: SyntheticsStepMonitorSteps[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new SyntheticsStepMonitorTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: SyntheticsStepMonitorTag[] | cdktn.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      browsers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._browsers),
      devices: cdktn.listMapper(cdktn.stringToTerraform, false)(this._devices),
      enable_screenshot_on_failure_and_script: cdktn.booleanToTerraform(this._enableScreenshotOnFailureAndScript),
      id: cdktn.stringToTerraform(this._id),
      locations_public: cdktn.listMapper(cdktn.stringToTerraform, false)(this._locationsPublic),
      name: cdktn.stringToTerraform(this._name),
      period: cdktn.stringToTerraform(this._period),
      runtime_type: cdktn.stringToTerraform(this._runtimeType),
      runtime_type_version: cdktn.stringToTerraform(this._runtimeTypeVersion),
      status: cdktn.stringToTerraform(this._status),
      use_unsupported_legacy_runtime: cdktn.booleanToTerraform(this._useUnsupportedLegacyRuntime),
      location_private: cdktn.listMapper(syntheticsStepMonitorLocationPrivateToTerraform, true)(this._locationPrivate.internalValue),
      steps: cdktn.listMapper(syntheticsStepMonitorStepsToTerraform, true)(this._steps.internalValue),
      tag: cdktn.listMapper(syntheticsStepMonitorTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      browsers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._browsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      devices: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_screenshot_on_failure_and_script: {
        value: cdktn.booleanToHclTerraform(this._enableScreenshotOnFailureAndScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations_public: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._locationsPublic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktn.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_type: {
        value: cdktn.stringToHclTerraform(this._runtimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_type_version: {
        value: cdktn.stringToHclTerraform(this._runtimeTypeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_unsupported_legacy_runtime: {
        value: cdktn.booleanToHclTerraform(this._useUnsupportedLegacyRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_private: {
        value: cdktn.listMapperHcl(syntheticsStepMonitorLocationPrivateToHclTerraform, true)(this._locationPrivate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsStepMonitorLocationPrivateList",
      },
      steps: {
        value: cdktn.listMapperHcl(syntheticsStepMonitorStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsStepMonitorStepsList",
      },
      tag: {
        value: cdktn.listMapperHcl(syntheticsStepMonitorTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticsStepMonitorTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
