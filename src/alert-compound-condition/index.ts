/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AlertCompoundConditionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID for managing your compound alert conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}
  */
  readonly accountId?: number;
  /**
  * Whether or not to enable the alert condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * How the compound condition will take into account the component conditions' facets during evaluation. Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}
  */
  readonly facetMatchingBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title of the compound alert condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. Between 30-86400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}
  */
  readonly thresholdDuration?: number;
  /**
  * Expression that defines how component condition evaluations are combined. Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}
  */
  readonly triggerExpression: string;
  /**
  * component_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}
  */
  readonly componentConditions: AlertCompoundConditionComponentConditions[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}
  */
  readonly timeouts?: AlertCompoundConditionTimeouts;
}
export interface AlertCompoundConditionComponentConditions {
  /**
  * The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}
  */
  readonly alias: string;
  /**
  * The ID of the existing alert condition to use as a component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function alertCompoundConditionComponentConditionsToTerraform(struct?: AlertCompoundConditionComponentConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function alertCompoundConditionComponentConditionsToHclTerraform(struct?: AlertCompoundConditionComponentConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompoundConditionComponentConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlertCompoundConditionComponentConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompoundConditionComponentConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._id = value.id;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AlertCompoundConditionComponentConditionsList extends cdktn.ComplexList {
  public internalValue? : AlertCompoundConditionComponentConditions[] | cdktn.IResolvable

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
  public get(index: number): AlertCompoundConditionComponentConditionsOutputReference {
    return new AlertCompoundConditionComponentConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertCompoundConditionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}
  */
  readonly create?: string;
}

export function alertCompoundConditionTimeoutsToTerraform(struct?: AlertCompoundConditionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function alertCompoundConditionTimeoutsToHclTerraform(struct?: AlertCompoundConditionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertCompoundConditionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertCompoundConditionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertCompoundConditionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition newrelic_alert_compound_condition}
*/
export class AlertCompoundCondition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_compound_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertCompoundCondition to import
  * @param importFromId The id of the existing AlertCompoundCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertCompoundCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_compound_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/alert_compound_condition newrelic_alert_compound_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertCompoundConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AlertCompoundConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_compound_condition',
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
    this._enabled = config.enabled;
    this._facetMatchingBehavior = config.facetMatchingBehavior;
    this._id = config.id;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._thresholdDuration = config.thresholdDuration;
    this._triggerExpression = config.triggerExpression;
    this._componentConditions.internalValue = config.componentConditions;
    this._timeouts.internalValue = config.timeouts;
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

  // facet_matching_behavior - computed: true, optional: true, required: false
  private _facetMatchingBehavior?: string; 
  public get facetMatchingBehavior() {
    return this.getStringAttribute('facet_matching_behavior');
  }
  public set facetMatchingBehavior(value: string) {
    this._facetMatchingBehavior = value;
  }
  public resetFacetMatchingBehavior() {
    this._facetMatchingBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetMatchingBehaviorInput() {
    return this._facetMatchingBehavior;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
  }

  // threshold_duration - computed: true, optional: true, required: false
  private _thresholdDuration?: number; 
  public get thresholdDuration() {
    return this.getNumberAttribute('threshold_duration');
  }
  public set thresholdDuration(value: number) {
    this._thresholdDuration = value;
  }
  public resetThresholdDuration() {
    this._thresholdDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDurationInput() {
    return this._thresholdDuration;
  }

  // trigger_expression - computed: false, optional: false, required: true
  private _triggerExpression?: string; 
  public get triggerExpression() {
    return this.getStringAttribute('trigger_expression');
  }
  public set triggerExpression(value: string) {
    this._triggerExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerExpressionInput() {
    return this._triggerExpression;
  }

  // component_conditions - computed: false, optional: false, required: true
  private _componentConditions = new AlertCompoundConditionComponentConditionsList(this, "component_conditions", true);
  public get componentConditions() {
    return this._componentConditions;
  }
  public putComponentConditions(value: AlertCompoundConditionComponentConditions[] | cdktn.IResolvable) {
    this._componentConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConditionsInput() {
    return this._componentConditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlertCompoundConditionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlertCompoundConditionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      enabled: cdktn.booleanToTerraform(this._enabled),
      facet_matching_behavior: cdktn.stringToTerraform(this._facetMatchingBehavior),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      policy_id: cdktn.numberToTerraform(this._policyId),
      runbook_url: cdktn.stringToTerraform(this._runbookUrl),
      threshold_duration: cdktn.numberToTerraform(this._thresholdDuration),
      trigger_expression: cdktn.stringToTerraform(this._triggerExpression),
      component_conditions: cdktn.listMapper(alertCompoundConditionComponentConditionsToTerraform, true)(this._componentConditions.internalValue),
      timeouts: alertCompoundConditionTimeoutsToTerraform(this._timeouts.internalValue),
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      facet_matching_behavior: {
        value: cdktn.stringToHclTerraform(this._facetMatchingBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktn.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_url: {
        value: cdktn.stringToHclTerraform(this._runbookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_duration: {
        value: cdktn.numberToHclTerraform(this._thresholdDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_expression: {
        value: cdktn.stringToHclTerraform(this._triggerExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_conditions: {
        value: cdktn.listMapperHcl(alertCompoundConditionComponentConditionsToHclTerraform, true)(this._componentConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertCompoundConditionComponentConditionsList",
      },
      timeouts: {
        value: alertCompoundConditionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertCompoundConditionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
