/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PathpointFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID that owns this Pathpoint flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}
  */
  readonly accountId?: number;
  /**
  * Optional category used to group flows (e.g. Marketing, Checkout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}
  */
  readonly category?: string;
  /**
  * Optional description of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}
  */
  readonly description?: string;
  /**
  * Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}
  */
  readonly healthRollup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name of the Pathpoint flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name: string;
  /**
  * How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * kpis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}
  */
  readonly kpis?: PathpointFlowKpis[] | cdktn.IResolvable;
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stages PathpointFlow#stages}
  */
  readonly stages?: PathpointFlowStages[] | cdktn.IResolvable;
}
export interface PathpointFlowKpisQuerySelect {
  /**
  * Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Optional alias for the aggregated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}
  */
  readonly alias?: string;
  /**
  * Attribute name to aggregate. Required for all functions except COUNT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}
  */
  readonly attribute?: string;
  /**
  * Threshold used in the selected function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}
  */
  readonly threshold?: number;
}

export function pathpointFlowKpisQuerySelectToTerraform(struct?: PathpointFlowKpisQuerySelectOutputReference | PathpointFlowKpisQuerySelect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
    alias: cdktn.stringToTerraform(struct!.alias),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function pathpointFlowKpisQuerySelectToHclTerraform(struct?: PathpointFlowKpisQuerySelectOutputReference | PathpointFlowKpisQuerySelect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_type: {
      value: cdktn.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowKpisQuerySelectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowKpisQuerySelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowKpisQuerySelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._alias = undefined;
      this._attribute = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._alias = value.alias;
      this._attribute = value.attribute;
      this._threshold = value.threshold;
    }
  }

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface PathpointFlowKpisQueryTimeWindowRelativeRange {
  /**
  * The earlier window to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}
  */
  readonly compareAgainst?: string;
  /**
  * How far back the KPI is evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}
  */
  readonly since: string;
}

export function pathpointFlowKpisQueryTimeWindowRelativeRangeToTerraform(struct?: PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference | PathpointFlowKpisQueryTimeWindowRelativeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compare_against: cdktn.stringToTerraform(struct!.compareAgainst),
    since: cdktn.stringToTerraform(struct!.since),
  }
}


export function pathpointFlowKpisQueryTimeWindowRelativeRangeToHclTerraform(struct?: PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference | PathpointFlowKpisQueryTimeWindowRelativeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compare_against: {
      value: cdktn.stringToHclTerraform(struct!.compareAgainst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    since: {
      value: cdktn.stringToHclTerraform(struct!.since),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowKpisQueryTimeWindowRelativeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareAgainst !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareAgainst = this._compareAgainst;
    }
    if (this._since !== undefined) {
      hasAnyValues = true;
      internalValueResult.since = this._since;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowKpisQueryTimeWindowRelativeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compareAgainst = undefined;
      this._since = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compareAgainst = value.compareAgainst;
      this._since = value.since;
    }
  }

  // compare_against - computed: false, optional: true, required: false
  private _compareAgainst?: string; 
  public get compareAgainst() {
    return this.getStringAttribute('compare_against');
  }
  public set compareAgainst(value: string) {
    this._compareAgainst = value;
  }
  public resetCompareAgainst() {
    this._compareAgainst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareAgainstInput() {
    return this._compareAgainst;
  }

  // since - computed: false, optional: false, required: true
  private _since?: string; 
  public get since() {
    return this.getStringAttribute('since');
  }
  public set since(value: string) {
    this._since = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinceInput() {
    return this._since;
  }
}
export interface PathpointFlowKpisQueryTimeWindow {
  /**
  * Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}
  */
  readonly customRange?: string;
  /**
  * relative_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}
  */
  readonly relativeRange?: PathpointFlowKpisQueryTimeWindowRelativeRange;
}

export function pathpointFlowKpisQueryTimeWindowToTerraform(struct?: PathpointFlowKpisQueryTimeWindowOutputReference | PathpointFlowKpisQueryTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_range: cdktn.stringToTerraform(struct!.customRange),
    relative_range: pathpointFlowKpisQueryTimeWindowRelativeRangeToTerraform(struct!.relativeRange),
  }
}


export function pathpointFlowKpisQueryTimeWindowToHclTerraform(struct?: PathpointFlowKpisQueryTimeWindowOutputReference | PathpointFlowKpisQueryTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_range: {
      value: cdktn.stringToHclTerraform(struct!.customRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_range: {
      value: pathpointFlowKpisQueryTimeWindowRelativeRangeToHclTerraform(struct!.relativeRange),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowKpisQueryTimeWindowRelativeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowKpisQueryTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowKpisQueryTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRange = this._customRange;
    }
    if (this._relativeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeRange = this._relativeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowKpisQueryTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRange = undefined;
      this._relativeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRange = value.customRange;
      this._relativeRange.internalValue = value.relativeRange;
    }
  }

  // custom_range - computed: false, optional: true, required: false
  private _customRange?: string; 
  public get customRange() {
    return this.getStringAttribute('custom_range');
  }
  public set customRange(value: string) {
    this._customRange = value;
  }
  public resetCustomRange() {
    this._customRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRangeInput() {
    return this._customRange;
  }

  // relative_range - computed: false, optional: true, required: false
  private _relativeRange = new PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference(this, "relative_range");
  public get relativeRange() {
    return this._relativeRange;
  }
  public putRelativeRange(value: PathpointFlowKpisQueryTimeWindowRelativeRange) {
    this._relativeRange.internalValue = value;
  }
  public resetRelativeRange() {
    this._relativeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeRangeInput() {
    return this._relativeRange.internalValue;
  }
}
export interface PathpointFlowKpisQuery {
  /**
  * Data source to query from (e.g., Transaction, Metric, Log).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}
  */
  readonly from: string;
  /**
  * Optional WHERE clause to filter data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}
  */
  readonly where?: string;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}
  */
  readonly select: PathpointFlowKpisQuerySelect;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}
  */
  readonly timeWindow?: PathpointFlowKpisQueryTimeWindow;
}

export function pathpointFlowKpisQueryToTerraform(struct?: PathpointFlowKpisQueryOutputReference | PathpointFlowKpisQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    where: cdktn.stringToTerraform(struct!.where),
    select: pathpointFlowKpisQuerySelectToTerraform(struct!.select),
    time_window: pathpointFlowKpisQueryTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function pathpointFlowKpisQueryToHclTerraform(struct?: PathpointFlowKpisQueryOutputReference | PathpointFlowKpisQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    where: {
      value: cdktn.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select: {
      value: pathpointFlowKpisQuerySelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowKpisQuerySelectList",
    },
    time_window: {
      value: pathpointFlowKpisQueryTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowKpisQueryTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowKpisQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowKpisQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowKpisQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
      this._select.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
      this._select.internalValue = value.select;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }

  // select - computed: false, optional: false, required: true
  private _select = new PathpointFlowKpisQuerySelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: PathpointFlowKpisQuerySelect) {
    this._select.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new PathpointFlowKpisQueryTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: PathpointFlowKpisQueryTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface PathpointFlowKpis {
  /**
  * Account ID this KPI belongs to. Defaults to the flow's account_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}
  */
  readonly accountId?: number;
  /**
  * Optional category to group KPIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}
  */
  readonly category?: string;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}
  */
  readonly description?: string;
  /**
  * Display name of the KPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name: string;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}
  */
  readonly query: PathpointFlowKpisQuery;
}

export function pathpointFlowKpisToTerraform(struct?: PathpointFlowKpis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.numberToTerraform(struct!.accountId),
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    query: pathpointFlowKpisQueryToTerraform(struct!.query),
  }
}


export function pathpointFlowKpisToHclTerraform(struct?: PathpointFlowKpis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.numberToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    query: {
      value: pathpointFlowKpisQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowKpisQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowKpisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowKpis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowKpis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._category = undefined;
      this._description = undefined;
      this._name = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._category = value.category;
      this._description = value.description;
      this._name = value.name;
      this._query.internalValue = value.query;
    }
  }

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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_query - computed: true, optional: false, required: false
  public get metricQuery() {
    return this.getStringAttribute('metric_query');
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

  // query - computed: false, optional: false, required: true
  private _query = new PathpointFlowKpisQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PathpointFlowKpisQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PathpointFlowKpisList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowKpis[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowKpisOutputReference {
    return new PathpointFlowKpisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathpointFlowStagesLevelsStepsConfig {
  /**
  * How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}
  */
  readonly healthRollup?: string;
  /**
  * Whether threshold is FIXED or PERCENTAGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Numeric threshold value for step health evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function pathpointFlowStagesLevelsStepsConfigToTerraform(struct?: PathpointFlowStagesLevelsStepsConfigOutputReference | PathpointFlowStagesLevelsStepsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_rollup: cdktn.stringToTerraform(struct!.healthRollup),
    threshold_type: cdktn.stringToTerraform(struct!.thresholdType),
    threshold_value: cdktn.numberToTerraform(struct!.thresholdValue),
  }
}


export function pathpointFlowStagesLevelsStepsConfigToHclTerraform(struct?: PathpointFlowStagesLevelsStepsConfigOutputReference | PathpointFlowStagesLevelsStepsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_rollup: {
      value: cdktn.stringToHclTerraform(struct!.healthRollup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_type: {
      value: cdktn.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktn.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesLevelsStepsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesLevelsStepsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthRollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthRollup = this._healthRollup;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesLevelsStepsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthRollup = undefined;
      this._thresholdType = undefined;
      this._thresholdValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthRollup = value.healthRollup;
      this._thresholdType = value.thresholdType;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // health_rollup - computed: false, optional: true, required: false
  private _healthRollup?: string; 
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }
  public set healthRollup(value: string) {
    this._healthRollup = value;
  }
  public resetHealthRollup() {
    this._healthRollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthRollupInput() {
    return this._healthRollup;
  }

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}
export interface PathpointFlowStagesLevelsStepsEntitySearchQuery {
  /**
  * When true, this query is excluded from health calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}
  */
  readonly isExcluded?: boolean | cdktn.IResolvable;
  /**
  * Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}
  */
  readonly query: string;
}

export function pathpointFlowStagesLevelsStepsEntitySearchQueryToTerraform(struct?: PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference | PathpointFlowStagesLevelsStepsEntitySearchQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_excluded: cdktn.booleanToTerraform(struct!.isExcluded),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function pathpointFlowStagesLevelsStepsEntitySearchQueryToHclTerraform(struct?: PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference | PathpointFlowStagesLevelsStepsEntitySearchQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_excluded: {
      value: cdktn.booleanToHclTerraform(struct!.isExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesLevelsStepsEntitySearchQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExcluded = this._isExcluded;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesLevelsStepsEntitySearchQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isExcluded = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isExcluded = value.isExcluded;
      this._query = value.query;
    }
  }

  // is_excluded - computed: false, optional: true, required: false
  private _isExcluded?: boolean | cdktn.IResolvable; 
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }
  public set isExcluded(value: boolean | cdktn.IResolvable) {
    this._isExcluded = value;
  }
  public resetIsExcluded() {
    this._isExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedInput() {
    return this._isExcluded;
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
export interface PathpointFlowStagesLevelsStepsSignals {
  /**
  * Entity GUID of the signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#guid PathpointFlow#guid}
  */
  readonly guid: string;
  /**
  * When true, this signal is excluded from step health calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}
  */
  readonly isExcluded?: boolean | cdktn.IResolvable;
  /**
  * Display name of the signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name?: string;
  /**
  * Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#type PathpointFlow#type}
  */
  readonly type?: string;
}

export function pathpointFlowStagesLevelsStepsSignalsToTerraform(struct?: PathpointFlowStagesLevelsStepsSignals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guid: cdktn.stringToTerraform(struct!.guid),
    is_excluded: cdktn.booleanToTerraform(struct!.isExcluded),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function pathpointFlowStagesLevelsStepsSignalsToHclTerraform(struct?: PathpointFlowStagesLevelsStepsSignals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guid: {
      value: cdktn.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_excluded: {
      value: cdktn.booleanToHclTerraform(struct!.isExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PathpointFlowStagesLevelsStepsSignalsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowStagesLevelsStepsSignals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._isExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExcluded = this._isExcluded;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesLevelsStepsSignals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._isExcluded = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._isExcluded = value.isExcluded;
      this._name = value.name;
      this._type = value.type;
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

  // is_excluded - computed: false, optional: true, required: false
  private _isExcluded?: boolean | cdktn.IResolvable; 
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }
  public set isExcluded(value: boolean | cdktn.IResolvable) {
    this._isExcluded = value;
  }
  public resetIsExcluded() {
    this._isExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedInput() {
    return this._isExcluded;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PathpointFlowStagesLevelsStepsSignalsList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowStagesLevelsStepsSignals[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowStagesLevelsStepsSignalsOutputReference {
    return new PathpointFlowStagesLevelsStepsSignalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathpointFlowStagesLevelsSteps {
  /**
  * When true, this step is excluded from level health calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}
  */
  readonly isExcluded?: boolean | cdktn.IResolvable;
  /**
  * Optional URL to an external resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}
  */
  readonly link?: string;
  /**
  * Display name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name: string;
  /**
  * Account IDs whose data is scoped to this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#scoped_accounts PathpointFlow#scoped_accounts}
  */
  readonly scopedAccounts?: number[];
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#config PathpointFlow#config}
  */
  readonly config?: PathpointFlowStagesLevelsStepsConfig;
  /**
  * entity_search_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#entity_search_query PathpointFlow#entity_search_query}
  */
  readonly entitySearchQuery?: PathpointFlowStagesLevelsStepsEntitySearchQuery;
  /**
  * signals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#signals PathpointFlow#signals}
  */
  readonly signals?: PathpointFlowStagesLevelsStepsSignals[] | cdktn.IResolvable;
}

export function pathpointFlowStagesLevelsStepsToTerraform(struct?: PathpointFlowStagesLevelsSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_excluded: cdktn.booleanToTerraform(struct!.isExcluded),
    link: cdktn.stringToTerraform(struct!.link),
    name: cdktn.stringToTerraform(struct!.name),
    scoped_accounts: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.scopedAccounts),
    config: pathpointFlowStagesLevelsStepsConfigToTerraform(struct!.config),
    entity_search_query: pathpointFlowStagesLevelsStepsEntitySearchQueryToTerraform(struct!.entitySearchQuery),
    signals: cdktn.listMapper(pathpointFlowStagesLevelsStepsSignalsToTerraform, true)(struct!.signals),
  }
}


export function pathpointFlowStagesLevelsStepsToHclTerraform(struct?: PathpointFlowStagesLevelsSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_excluded: {
      value: cdktn.booleanToHclTerraform(struct!.isExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
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
    scoped_accounts: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.scopedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    config: {
      value: pathpointFlowStagesLevelsStepsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesLevelsStepsConfigList",
    },
    entity_search_query: {
      value: pathpointFlowStagesLevelsStepsEntitySearchQueryToHclTerraform(struct!.entitySearchQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesLevelsStepsEntitySearchQueryList",
    },
    signals: {
      value: cdktn.listMapperHcl(pathpointFlowStagesLevelsStepsSignalsToHclTerraform, true)(struct!.signals),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesLevelsStepsSignalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesLevelsStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowStagesLevelsSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExcluded = this._isExcluded;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopedAccounts = this._scopedAccounts;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._entitySearchQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySearchQuery = this._entitySearchQuery?.internalValue;
    }
    if (this._signals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signals = this._signals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesLevelsSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isExcluded = undefined;
      this._link = undefined;
      this._name = undefined;
      this._scopedAccounts = undefined;
      this._config.internalValue = undefined;
      this._entitySearchQuery.internalValue = undefined;
      this._signals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isExcluded = value.isExcluded;
      this._link = value.link;
      this._name = value.name;
      this._scopedAccounts = value.scopedAccounts;
      this._config.internalValue = value.config;
      this._entitySearchQuery.internalValue = value.entitySearchQuery;
      this._signals.internalValue = value.signals;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_excluded - computed: false, optional: true, required: false
  private _isExcluded?: boolean | cdktn.IResolvable; 
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }
  public set isExcluded(value: boolean | cdktn.IResolvable) {
    this._isExcluded = value;
  }
  public resetIsExcluded() {
    this._isExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedInput() {
    return this._isExcluded;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
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

  // scoped_accounts - computed: true, optional: true, required: false
  private _scopedAccounts?: number[]; 
  public get scopedAccounts() {
    return this.getNumberListAttribute('scoped_accounts');
  }
  public set scopedAccounts(value: number[]) {
    this._scopedAccounts = value;
  }
  public resetScopedAccounts() {
    this._scopedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedAccountsInput() {
    return this._scopedAccounts;
  }

  // config - computed: false, optional: true, required: false
  private _config = new PathpointFlowStagesLevelsStepsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PathpointFlowStagesLevelsStepsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // entity_search_query - computed: false, optional: true, required: false
  private _entitySearchQuery = new PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference(this, "entity_search_query");
  public get entitySearchQuery() {
    return this._entitySearchQuery;
  }
  public putEntitySearchQuery(value: PathpointFlowStagesLevelsStepsEntitySearchQuery) {
    this._entitySearchQuery.internalValue = value;
  }
  public resetEntitySearchQuery() {
    this._entitySearchQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySearchQueryInput() {
    return this._entitySearchQuery.internalValue;
  }

  // signals - computed: false, optional: true, required: false
  private _signals = new PathpointFlowStagesLevelsStepsSignalsList(this, "signals", false);
  public get signals() {
    return this._signals;
  }
  public putSignals(value: PathpointFlowStagesLevelsStepsSignals[] | cdktn.IResolvable) {
    this._signals.internalValue = value;
  }
  public resetSignals() {
    this._signals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalsInput() {
    return this._signals.internalValue;
  }
}

export class PathpointFlowStagesLevelsStepsList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowStagesLevelsSteps[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowStagesLevelsStepsOutputReference {
    return new PathpointFlowStagesLevelsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathpointFlowStagesLevels {
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#steps PathpointFlow#steps}
  */
  readonly steps?: PathpointFlowStagesLevelsSteps[] | cdktn.IResolvable;
}

export function pathpointFlowStagesLevelsToTerraform(struct?: PathpointFlowStagesLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    steps: cdktn.listMapper(pathpointFlowStagesLevelsStepsToTerraform, true)(struct!.steps),
  }
}


export function pathpointFlowStagesLevelsToHclTerraform(struct?: PathpointFlowStagesLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    steps: {
      value: cdktn.listMapperHcl(pathpointFlowStagesLevelsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesLevelsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesLevelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowStagesLevels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesLevels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._steps.internalValue = value.steps;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new PathpointFlowStagesLevelsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: PathpointFlowStagesLevelsSteps[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class PathpointFlowStagesLevelsList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowStagesLevels[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowStagesLevelsOutputReference {
    return new PathpointFlowStagesLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathpointFlowStagesRelated {
  /**
  * When true, this stage acts as a source to other stages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#source PathpointFlow#source}
  */
  readonly source?: boolean | cdktn.IResolvable;
  /**
  * When true, this stage acts as a target to other stages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#target PathpointFlow#target}
  */
  readonly target?: boolean | cdktn.IResolvable;
}

export function pathpointFlowStagesRelatedToTerraform(struct?: PathpointFlowStagesRelatedOutputReference | PathpointFlowStagesRelated): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.booleanToTerraform(struct!.source),
    target: cdktn.booleanToTerraform(struct!.target),
  }
}


export function pathpointFlowStagesRelatedToHclTerraform(struct?: PathpointFlowStagesRelatedOutputReference | PathpointFlowStagesRelated): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.booleanToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktn.booleanToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesRelatedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesRelated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesRelated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: boolean | cdktn.IResolvable; 
  public get source() {
    return this.getBooleanAttribute('source');
  }
  public set source(value: boolean | cdktn.IResolvable) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: true, required: false
  private _target?: boolean | cdktn.IResolvable; 
  public get target() {
    return this.getBooleanAttribute('target');
  }
  public set target(value: boolean | cdktn.IResolvable) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface PathpointFlowStagesStageKpisQuerySelect {
  /**
  * Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Optional alias for the aggregated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}
  */
  readonly alias?: string;
  /**
  * Attribute name to aggregate. Required for all functions except COUNT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}
  */
  readonly attribute?: string;
  /**
  * Threshold used in the selected function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}
  */
  readonly threshold?: number;
}

export function pathpointFlowStagesStageKpisQuerySelectToTerraform(struct?: PathpointFlowStagesStageKpisQuerySelectOutputReference | PathpointFlowStagesStageKpisQuerySelect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
    alias: cdktn.stringToTerraform(struct!.alias),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function pathpointFlowStagesStageKpisQuerySelectToHclTerraform(struct?: PathpointFlowStagesStageKpisQuerySelectOutputReference | PathpointFlowStagesStageKpisQuerySelect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_type: {
      value: cdktn.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesStageKpisQuerySelectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesStageKpisQuerySelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesStageKpisQuerySelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._alias = undefined;
      this._attribute = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._alias = value.alias;
      this._attribute = value.attribute;
      this._threshold = value.threshold;
    }
  }

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange {
  /**
  * The earlier window to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}
  */
  readonly compareAgainst?: string;
  /**
  * How far back the KPI is evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}
  */
  readonly since: string;
}

export function pathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeToTerraform(struct?: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference | PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compare_against: cdktn.stringToTerraform(struct!.compareAgainst),
    since: cdktn.stringToTerraform(struct!.since),
  }
}


export function pathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeToHclTerraform(struct?: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference | PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compare_against: {
      value: cdktn.stringToHclTerraform(struct!.compareAgainst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    since: {
      value: cdktn.stringToHclTerraform(struct!.since),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareAgainst !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareAgainst = this._compareAgainst;
    }
    if (this._since !== undefined) {
      hasAnyValues = true;
      internalValueResult.since = this._since;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compareAgainst = undefined;
      this._since = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compareAgainst = value.compareAgainst;
      this._since = value.since;
    }
  }

  // compare_against - computed: false, optional: true, required: false
  private _compareAgainst?: string; 
  public get compareAgainst() {
    return this.getStringAttribute('compare_against');
  }
  public set compareAgainst(value: string) {
    this._compareAgainst = value;
  }
  public resetCompareAgainst() {
    this._compareAgainst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareAgainstInput() {
    return this._compareAgainst;
  }

  // since - computed: false, optional: false, required: true
  private _since?: string; 
  public get since() {
    return this.getStringAttribute('since');
  }
  public set since(value: string) {
    this._since = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinceInput() {
    return this._since;
  }
}
export interface PathpointFlowStagesStageKpisQueryTimeWindow {
  /**
  * Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}
  */
  readonly customRange?: string;
  /**
  * relative_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}
  */
  readonly relativeRange?: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange;
}

export function pathpointFlowStagesStageKpisQueryTimeWindowToTerraform(struct?: PathpointFlowStagesStageKpisQueryTimeWindowOutputReference | PathpointFlowStagesStageKpisQueryTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_range: cdktn.stringToTerraform(struct!.customRange),
    relative_range: pathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeToTerraform(struct!.relativeRange),
  }
}


export function pathpointFlowStagesStageKpisQueryTimeWindowToHclTerraform(struct?: PathpointFlowStagesStageKpisQueryTimeWindowOutputReference | PathpointFlowStagesStageKpisQueryTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_range: {
      value: cdktn.stringToHclTerraform(struct!.customRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_range: {
      value: pathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeToHclTerraform(struct!.relativeRange),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesStageKpisQueryTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesStageKpisQueryTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRange = this._customRange;
    }
    if (this._relativeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeRange = this._relativeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesStageKpisQueryTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRange = undefined;
      this._relativeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRange = value.customRange;
      this._relativeRange.internalValue = value.relativeRange;
    }
  }

  // custom_range - computed: false, optional: true, required: false
  private _customRange?: string; 
  public get customRange() {
    return this.getStringAttribute('custom_range');
  }
  public set customRange(value: string) {
    this._customRange = value;
  }
  public resetCustomRange() {
    this._customRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRangeInput() {
    return this._customRange;
  }

  // relative_range - computed: false, optional: true, required: false
  private _relativeRange = new PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference(this, "relative_range");
  public get relativeRange() {
    return this._relativeRange;
  }
  public putRelativeRange(value: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange) {
    this._relativeRange.internalValue = value;
  }
  public resetRelativeRange() {
    this._relativeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeRangeInput() {
    return this._relativeRange.internalValue;
  }
}
export interface PathpointFlowStagesStageKpisQuery {
  /**
  * Data source to query from (e.g., Transaction, Metric, Log).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}
  */
  readonly from: string;
  /**
  * Optional WHERE clause to filter data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}
  */
  readonly where?: string;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}
  */
  readonly select: PathpointFlowStagesStageKpisQuerySelect;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}
  */
  readonly timeWindow?: PathpointFlowStagesStageKpisQueryTimeWindow;
}

export function pathpointFlowStagesStageKpisQueryToTerraform(struct?: PathpointFlowStagesStageKpisQueryOutputReference | PathpointFlowStagesStageKpisQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    where: cdktn.stringToTerraform(struct!.where),
    select: pathpointFlowStagesStageKpisQuerySelectToTerraform(struct!.select),
    time_window: pathpointFlowStagesStageKpisQueryTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function pathpointFlowStagesStageKpisQueryToHclTerraform(struct?: PathpointFlowStagesStageKpisQueryOutputReference | PathpointFlowStagesStageKpisQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    where: {
      value: cdktn.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select: {
      value: pathpointFlowStagesStageKpisQuerySelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesStageKpisQuerySelectList",
    },
    time_window: {
      value: pathpointFlowStagesStageKpisQueryTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesStageKpisQueryTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesStageKpisQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathpointFlowStagesStageKpisQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesStageKpisQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
      this._select.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
      this._select.internalValue = value.select;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }

  // select - computed: false, optional: false, required: true
  private _select = new PathpointFlowStagesStageKpisQuerySelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: PathpointFlowStagesStageKpisQuerySelect) {
    this._select.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new PathpointFlowStagesStageKpisQueryTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: PathpointFlowStagesStageKpisQueryTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface PathpointFlowStagesStageKpis {
  /**
  * Account ID this KPI belongs to. Defaults to the flow's account_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}
  */
  readonly accountId?: number;
  /**
  * Optional category to group KPIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}
  */
  readonly category?: string;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}
  */
  readonly description?: string;
  /**
  * Display name of the KPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name: string;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}
  */
  readonly query: PathpointFlowStagesStageKpisQuery;
}

export function pathpointFlowStagesStageKpisToTerraform(struct?: PathpointFlowStagesStageKpis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.numberToTerraform(struct!.accountId),
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    query: pathpointFlowStagesStageKpisQueryToTerraform(struct!.query),
  }
}


export function pathpointFlowStagesStageKpisToHclTerraform(struct?: PathpointFlowStagesStageKpis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.numberToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    query: {
      value: pathpointFlowStagesStageKpisQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesStageKpisQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesStageKpisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowStagesStageKpis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStagesStageKpis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._category = undefined;
      this._description = undefined;
      this._name = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._category = value.category;
      this._description = value.description;
      this._name = value.name;
      this._query.internalValue = value.query;
    }
  }

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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_query - computed: true, optional: false, required: false
  public get metricQuery() {
    return this.getStringAttribute('metric_query');
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

  // query - computed: false, optional: false, required: true
  private _query = new PathpointFlowStagesStageKpisQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PathpointFlowStagesStageKpisQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PathpointFlowStagesStageKpisList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowStagesStageKpis[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowStagesStageKpisOutputReference {
    return new PathpointFlowStagesStageKpisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PathpointFlowStages {
  /**
  * Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}
  */
  readonly healthRollup?: string;
  /**
  * When true, this stage is excluded from flow health calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}
  */
  readonly isExcluded?: boolean | cdktn.IResolvable;
  /**
  * Optional URL to an external resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}
  */
  readonly link?: string;
  /**
  * Display name of the stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}
  */
  readonly name: string;
  /**
  * levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#levels PathpointFlow#levels}
  */
  readonly levels?: PathpointFlowStagesLevels[] | cdktn.IResolvable;
  /**
  * related block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#related PathpointFlow#related}
  */
  readonly related?: PathpointFlowStagesRelated;
  /**
  * stage_kpis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stage_kpis PathpointFlow#stage_kpis}
  */
  readonly stageKpis?: PathpointFlowStagesStageKpis[] | cdktn.IResolvable;
}

export function pathpointFlowStagesToTerraform(struct?: PathpointFlowStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_rollup: cdktn.stringToTerraform(struct!.healthRollup),
    is_excluded: cdktn.booleanToTerraform(struct!.isExcluded),
    link: cdktn.stringToTerraform(struct!.link),
    name: cdktn.stringToTerraform(struct!.name),
    levels: cdktn.listMapper(pathpointFlowStagesLevelsToTerraform, true)(struct!.levels),
    related: pathpointFlowStagesRelatedToTerraform(struct!.related),
    stage_kpis: cdktn.listMapper(pathpointFlowStagesStageKpisToTerraform, true)(struct!.stageKpis),
  }
}


export function pathpointFlowStagesToHclTerraform(struct?: PathpointFlowStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_rollup: {
      value: cdktn.stringToHclTerraform(struct!.healthRollup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_excluded: {
      value: cdktn.booleanToHclTerraform(struct!.isExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
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
    levels: {
      value: cdktn.listMapperHcl(pathpointFlowStagesLevelsToHclTerraform, true)(struct!.levels),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesLevelsList",
    },
    related: {
      value: pathpointFlowStagesRelatedToHclTerraform(struct!.related),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesRelatedList",
    },
    stage_kpis: {
      value: cdktn.listMapperHcl(pathpointFlowStagesStageKpisToHclTerraform, true)(struct!.stageKpis),
      isBlock: true,
      type: "list",
      storageClassType: "PathpointFlowStagesStageKpisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PathpointFlowStagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PathpointFlowStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthRollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthRollup = this._healthRollup;
    }
    if (this._isExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExcluded = this._isExcluded;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._levels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levels = this._levels?.internalValue;
    }
    if (this._related?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.related = this._related?.internalValue;
    }
    if (this._stageKpis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageKpis = this._stageKpis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathpointFlowStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthRollup = undefined;
      this._isExcluded = undefined;
      this._link = undefined;
      this._name = undefined;
      this._levels.internalValue = undefined;
      this._related.internalValue = undefined;
      this._stageKpis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthRollup = value.healthRollup;
      this._isExcluded = value.isExcluded;
      this._link = value.link;
      this._name = value.name;
      this._levels.internalValue = value.levels;
      this._related.internalValue = value.related;
      this._stageKpis.internalValue = value.stageKpis;
    }
  }

  // health_rollup - computed: false, optional: true, required: false
  private _healthRollup?: string; 
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }
  public set healthRollup(value: string) {
    this._healthRollup = value;
  }
  public resetHealthRollup() {
    this._healthRollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthRollupInput() {
    return this._healthRollup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_excluded - computed: false, optional: true, required: false
  private _isExcluded?: boolean | cdktn.IResolvable; 
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }
  public set isExcluded(value: boolean | cdktn.IResolvable) {
    this._isExcluded = value;
  }
  public resetIsExcluded() {
    this._isExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedInput() {
    return this._isExcluded;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
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

  // levels - computed: false, optional: true, required: false
  private _levels = new PathpointFlowStagesLevelsList(this, "levels", false);
  public get levels() {
    return this._levels;
  }
  public putLevels(value: PathpointFlowStagesLevels[] | cdktn.IResolvable) {
    this._levels.internalValue = value;
  }
  public resetLevels() {
    this._levels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels.internalValue;
  }

  // related - computed: false, optional: true, required: false
  private _related = new PathpointFlowStagesRelatedOutputReference(this, "related");
  public get related() {
    return this._related;
  }
  public putRelated(value: PathpointFlowStagesRelated) {
    this._related.internalValue = value;
  }
  public resetRelated() {
    this._related.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedInput() {
    return this._related.internalValue;
  }

  // stage_kpis - computed: false, optional: true, required: false
  private _stageKpis = new PathpointFlowStagesStageKpisList(this, "stage_kpis", false);
  public get stageKpis() {
    return this._stageKpis;
  }
  public putStageKpis(value: PathpointFlowStagesStageKpis[] | cdktn.IResolvable) {
    this._stageKpis.internalValue = value;
  }
  public resetStageKpis() {
    this._stageKpis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageKpisInput() {
    return this._stageKpis.internalValue;
  }
}

export class PathpointFlowStagesList extends cdktn.ComplexList {
  public internalValue? : PathpointFlowStages[] | cdktn.IResolvable

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
  public get(index: number): PathpointFlowStagesOutputReference {
    return new PathpointFlowStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow newrelic_pathpoint_flow}
*/
export class PathpointFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_pathpoint_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PathpointFlow to import
  * @param importFromId The id of the existing PathpointFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PathpointFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_pathpoint_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow newrelic_pathpoint_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PathpointFlowConfig
  */
  public constructor(scope: Construct, id: string, config: PathpointFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_pathpoint_flow',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.99.1',
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
    this._category = config.category;
    this._description = config.description;
    this._healthRollup = config.healthRollup;
    this._id = config.id;
    this._name = config.name;
    this._refreshInterval = config.refreshInterval;
    this._kpis.internalValue = config.kpis;
    this._stages.internalValue = config.stages;
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

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // health_rollup - computed: false, optional: true, required: false
  private _healthRollup?: string; 
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }
  public set healthRollup(value: string) {
    this._healthRollup = value;
  }
  public resetHealthRollup() {
    this._healthRollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthRollupInput() {
    return this._healthRollup;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // kpis - computed: false, optional: true, required: false
  private _kpis = new PathpointFlowKpisList(this, "kpis", false);
  public get kpis() {
    return this._kpis;
  }
  public putKpis(value: PathpointFlowKpis[] | cdktn.IResolvable) {
    this._kpis.internalValue = value;
  }
  public resetKpis() {
    this._kpis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpisInput() {
    return this._kpis.internalValue;
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new PathpointFlowStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: PathpointFlowStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      category: cdktn.stringToTerraform(this._category),
      description: cdktn.stringToTerraform(this._description),
      health_rollup: cdktn.stringToTerraform(this._healthRollup),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      refresh_interval: cdktn.stringToTerraform(this._refreshInterval),
      kpis: cdktn.listMapper(pathpointFlowKpisToTerraform, true)(this._kpis.internalValue),
      stages: cdktn.listMapper(pathpointFlowStagesToTerraform, true)(this._stages.internalValue),
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
      category: {
        value: cdktn.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_rollup: {
        value: cdktn.stringToHclTerraform(this._healthRollup),
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
      refresh_interval: {
        value: cdktn.stringToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kpis: {
        value: cdktn.listMapperHcl(pathpointFlowKpisToHclTerraform, true)(this._kpis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PathpointFlowKpisList",
      },
      stages: {
        value: cdktn.listMapperHcl(pathpointFlowStagesToHclTerraform, true)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PathpointFlowStagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
