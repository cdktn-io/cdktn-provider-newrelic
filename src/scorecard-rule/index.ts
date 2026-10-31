/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ScorecardRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#description ScorecardRule#description}
  */
  readonly description?: string;
  /**
  * Whether this rule is active. Set to false to pause evaluation without deleting the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Relative weight of this rule's contribution to the overall scorecard score. Must be a non-negative integer. Omit for equal weighting across all rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}
  */
  readonly impactWeight?: number;
  /**
  * The name of the scorecard rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#name ScorecardRule#name}
  */
  readonly name: string;
  /**
  * The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}
  */
  readonly progressLevel?: string;
  /**
  * Evaluation frequency in minutes. Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}
  */
  readonly runInterval?: number;
  /**
  * nrql_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}
  */
  readonly nrqlEngine: ScorecardRuleNrqlEngine;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#tags ScorecardRule#tags}
  */
  readonly tags?: ScorecardRuleTags[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}
  */
  readonly timeouts?: ScorecardRuleTimeouts;
}
export interface ScorecardRuleNrqlEngine {
  /**
  * Account IDs where this rule runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}
  */
  readonly accounts: number[];
  /**
  * Additional account IDs to join with the query accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}
  */
  readonly joinAccounts?: number[];
  /**
  * The NRQL query. Must be FACET-ed and alias the result as 'score'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#query ScorecardRule#query}
  */
  readonly query: string;
}

export function scorecardRuleNrqlEngineToTerraform(struct?: ScorecardRuleNrqlEngineOutputReference | ScorecardRuleNrqlEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounts: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.accounts),
    join_accounts: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.joinAccounts),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function scorecardRuleNrqlEngineToHclTerraform(struct?: ScorecardRuleNrqlEngineOutputReference | ScorecardRuleNrqlEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounts: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    join_accounts: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.joinAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
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

export class ScorecardRuleNrqlEngineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScorecardRuleNrqlEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._joinAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinAccounts = this._joinAccounts;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScorecardRuleNrqlEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accounts = undefined;
      this._joinAccounts = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accounts = value.accounts;
      this._joinAccounts = value.joinAccounts;
      this._query = value.query;
    }
  }

  // accounts - computed: false, optional: false, required: true
  private _accounts?: number[]; 
  public get accounts() {
    return this.getNumberListAttribute('accounts');
  }
  public set accounts(value: number[]) {
    this._accounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // join_accounts - computed: false, optional: true, required: false
  private _joinAccounts?: number[]; 
  public get joinAccounts() {
    return this.getNumberListAttribute('join_accounts');
  }
  public set joinAccounts(value: number[]) {
    this._joinAccounts = value;
  }
  public resetJoinAccounts() {
    this._joinAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinAccountsInput() {
    return this._joinAccounts;
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
export interface ScorecardRuleTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#key ScorecardRule#key}
  */
  readonly key: string;
  /**
  * The tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#values ScorecardRule#values}
  */
  readonly values: string[];
}

export function scorecardRuleTagsToTerraform(struct?: ScorecardRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function scorecardRuleTagsToHclTerraform(struct?: ScorecardRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ScorecardRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScorecardRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ScorecardRuleTags | cdktn.IResolvable | undefined) {
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

export class ScorecardRuleTagsList extends cdktn.ComplexList {
  public internalValue? : ScorecardRuleTags[] | cdktn.IResolvable

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
  public get(index: number): ScorecardRuleTagsOutputReference {
    return new ScorecardRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScorecardRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}
  */
  readonly update?: string;
}

export function scorecardRuleTimeoutsToTerraform(struct?: ScorecardRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function scorecardRuleTimeoutsToHclTerraform(struct?: ScorecardRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScorecardRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScorecardRuleTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScorecardRuleTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule newrelic_scorecard_rule}
*/
export class ScorecardRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_scorecard_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScorecardRule to import
  * @param importFromId The id of the existing ScorecardRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScorecardRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_scorecard_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule newrelic_scorecard_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScorecardRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ScorecardRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_scorecard_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.101.10',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._impactWeight = config.impactWeight;
    this._name = config.name;
    this._progressLevel = config.progressLevel;
    this._runInterval = config.runInterval;
    this._nrqlEngine.internalValue = config.nrqlEngine;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // impact_weight - computed: false, optional: true, required: false
  private _impactWeight?: number; 
  public get impactWeight() {
    return this.getNumberAttribute('impact_weight');
  }
  public set impactWeight(value: number) {
    this._impactWeight = value;
  }
  public resetImpactWeight() {
    this._impactWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactWeightInput() {
    return this._impactWeight;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // progress_level - computed: false, optional: true, required: false
  private _progressLevel?: string; 
  public get progressLevel() {
    return this.getStringAttribute('progress_level');
  }
  public set progressLevel(value: string) {
    this._progressLevel = value;
  }
  public resetProgressLevel() {
    this._progressLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressLevelInput() {
    return this._progressLevel;
  }

  // run_interval - computed: false, optional: true, required: false
  private _runInterval?: number; 
  public get runInterval() {
    return this.getNumberAttribute('run_interval');
  }
  public set runInterval(value: number) {
    this._runInterval = value;
  }
  public resetRunInterval() {
    this._runInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIntervalInput() {
    return this._runInterval;
  }

  // nrql_engine - computed: false, optional: false, required: true
  private _nrqlEngine = new ScorecardRuleNrqlEngineOutputReference(this, "nrql_engine");
  public get nrqlEngine() {
    return this._nrqlEngine;
  }
  public putNrqlEngine(value: ScorecardRuleNrqlEngine) {
    this._nrqlEngine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlEngineInput() {
    return this._nrqlEngine.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ScorecardRuleTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ScorecardRuleTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ScorecardRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ScorecardRuleTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      impact_weight: cdktn.numberToTerraform(this._impactWeight),
      name: cdktn.stringToTerraform(this._name),
      progress_level: cdktn.stringToTerraform(this._progressLevel),
      run_interval: cdktn.numberToTerraform(this._runInterval),
      nrql_engine: scorecardRuleNrqlEngineToTerraform(this._nrqlEngine.internalValue),
      tags: cdktn.listMapper(scorecardRuleTagsToTerraform, true)(this._tags.internalValue),
      timeouts: scorecardRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      impact_weight: {
        value: cdktn.numberToHclTerraform(this._impactWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progress_level: {
        value: cdktn.stringToHclTerraform(this._progressLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_interval: {
        value: cdktn.numberToHclTerraform(this._runInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nrql_engine: {
        value: scorecardRuleNrqlEngineToHclTerraform(this._nrqlEngine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScorecardRuleNrqlEngineList",
      },
      tags: {
        value: cdktn.listMapperHcl(scorecardRuleTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScorecardRuleTagsList",
      },
      timeouts: {
        value: scorecardRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScorecardRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
