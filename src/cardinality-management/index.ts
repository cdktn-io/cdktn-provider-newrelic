/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CardinalityManagementConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account-wide cardinality limit — the maximum number of unique dimension-value combinations allowed per metric per day. Required when `mode` is `DEFAULT`; must not be set when `mode` is `PER_METRIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#cardinality_limit CardinalityManagement#cardinality_limit}
  */
  readonly cardinalityLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#id CardinalityManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The override mode. Use `DEFAULT` to set a single account-wide limit that applies to all metrics, or `PER_METRIC` to set individual limits for one or more named metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#mode CardinalityManagement#mode}
  */
  readonly mode: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#metric CardinalityManagement#metric}
  */
  readonly metric?: CardinalityManagementMetric[] | cdktn.IResolvable;
}
export interface CardinalityManagementMetric {
  /**
  * The maximum number of unique dimension-value combinations allowed per day for this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#cardinality_limit CardinalityManagement#cardinality_limit}
  */
  readonly cardinalityLimit: number;
  /**
  * The full name of the metric (e.g. `http.server.duration`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#name CardinalityManagement#name}
  */
  readonly name: string;
}

export function cardinalityManagementMetricToTerraform(struct?: CardinalityManagementMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cardinality_limit: cdktn.numberToTerraform(struct!.cardinalityLimit),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function cardinalityManagementMetricToHclTerraform(struct?: CardinalityManagementMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cardinality_limit: {
      value: cdktn.numberToHclTerraform(struct!.cardinalityLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CardinalityManagementMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CardinalityManagementMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cardinalityLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardinalityLimit = this._cardinalityLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CardinalityManagementMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cardinalityLimit = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cardinalityLimit = value.cardinalityLimit;
      this._name = value.name;
    }
  }

  // cardinality_limit - computed: false, optional: false, required: true
  private _cardinalityLimit?: number; 
  public get cardinalityLimit() {
    return this.getNumberAttribute('cardinality_limit');
  }
  public set cardinalityLimit(value: number) {
    this._cardinalityLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cardinalityLimitInput() {
    return this._cardinalityLimit;
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

export class CardinalityManagementMetricList extends cdktn.ComplexList {
  public internalValue? : CardinalityManagementMetric[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CardinalityManagementMetricOutputReference {
    return new CardinalityManagementMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management newrelic_cardinality_management}
*/
export class CardinalityManagement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cardinality_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CardinalityManagement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CardinalityManagement to import
  * @param importFromId The id of the existing CardinalityManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CardinalityManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cardinality_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/cardinality_management newrelic_cardinality_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CardinalityManagementConfig
  */
  public constructor(scope: Construct, id: string, config: CardinalityManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cardinality_management',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.92.0',
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
    this._cardinalityLimit = config.cardinalityLimit;
    this._id = config.id;
    this._mode = config.mode;
    this._metric.internalValue = config.metric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cardinality_limit - computed: false, optional: true, required: false
  private _cardinalityLimit?: number; 
  public get cardinalityLimit() {
    return this.getNumberAttribute('cardinality_limit');
  }
  public set cardinalityLimit(value: number) {
    this._cardinalityLimit = value;
  }
  public resetCardinalityLimit() {
    this._cardinalityLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardinalityLimitInput() {
    return this._cardinalityLimit;
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

  // metric - computed: false, optional: true, required: false
  private _metric = new CardinalityManagementMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CardinalityManagementMetric[] | cdktn.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cardinality_limit: cdktn.numberToTerraform(this._cardinalityLimit),
      id: cdktn.stringToTerraform(this._id),
      mode: cdktn.stringToTerraform(this._mode),
      metric: cdktn.listMapper(cardinalityManagementMetricToTerraform, true)(this._metric.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cardinality_limit: {
        value: cdktn.numberToHclTerraform(this._cardinalityLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktn.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktn.listMapperHcl(cardinalityManagementMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CardinalityManagementMetricList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
