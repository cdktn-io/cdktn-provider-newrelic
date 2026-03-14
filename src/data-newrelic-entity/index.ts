/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataNewrelicEntityConfig extends cdktn.TerraformMetaArguments {
  /**
  * The New Relic account ID; if specified, constrains the data source to return an entity belonging to the account with this ID, of all matching entities retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#account_id DataNewrelicEntity#account_id}
  */
  readonly accountId?: number;
  /**
  * The entity's domain. Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and EXT. If not specified, all domains are searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#domain DataNewrelicEntity#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}
  */
  readonly entityTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#id DataNewrelicEntity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore case when searching the entity name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#ignore_case DataNewrelicEntity#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * A boolean attribute which when set to true, does not throw an error if the queried entity is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#ignore_not_found DataNewrelicEntity#ignore_not_found}
  */
  readonly ignoreNotFound?: boolean | cdktn.IResolvable;
  /**
  * The name of the entity in New Relic One. The first entity matching this name for the given search parameters will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#name DataNewrelicEntity#name}
  */
  readonly name: string;
  /**
  * The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#type DataNewrelicEntity#type}
  */
  readonly type?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#tag DataNewrelicEntity#tag}
  */
  readonly tag?: DataNewrelicEntityTag[] | cdktn.IResolvable;
}
export interface DataNewrelicEntityTag {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#key DataNewrelicEntity#key}
  */
  readonly key: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#value DataNewrelicEntity#value}
  */
  readonly value: string;
}

export function dataNewrelicEntityTagToTerraform(struct?: DataNewrelicEntityTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataNewrelicEntityTagToHclTerraform(struct?: DataNewrelicEntityTag | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNewrelicEntityTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataNewrelicEntityTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicEntityTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataNewrelicEntityTagList extends cdktn.ComplexList {
  public internalValue? : DataNewrelicEntityTag[] | cdktn.IResolvable

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
  public get(index: number): DataNewrelicEntityTagOutputReference {
    return new DataNewrelicEntityTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity newrelic_entity}
*/
export class DataNewrelicEntity extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataNewrelicEntity resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicEntity to import
  * @param importFromId The id of the existing DataNewrelicEntity that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicEntity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/entity newrelic_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicEntityConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_entity',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.81.0',
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
    this._domain = config.domain;
    this._entityTags = config.entityTags;
    this._id = config.id;
    this._ignoreCase = config.ignoreCase;
    this._ignoreNotFound = config.ignoreNotFound;
    this._name = config.name;
    this._type = config.type;
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

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getNumberAttribute('application_id');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // entity_tags - computed: true, optional: true, required: false
  private _entityTags?: string; 
  public get entityTags() {
    return this.getStringAttribute('entity_tags');
  }
  public set entityTags(value: string) {
    this._entityTags = value;
  }
  public resetEntityTags() {
    this._entityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktn.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktn.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // ignore_not_found - computed: false, optional: true, required: false
  private _ignoreNotFound?: boolean | cdktn.IResolvable; 
  public get ignoreNotFound() {
    return this.getBooleanAttribute('ignore_not_found');
  }
  public set ignoreNotFound(value: boolean | cdktn.IResolvable) {
    this._ignoreNotFound = value;
  }
  public resetIgnoreNotFound() {
    this._ignoreNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNotFoundInput() {
    return this._ignoreNotFound;
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

  // serving_apm_application_id - computed: true, optional: false, required: false
  public get servingApmApplicationId() {
    return this.getNumberAttribute('serving_apm_application_id');
  }

  // type - computed: true, optional: true, required: false
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

  // tag - computed: false, optional: true, required: false
  private _tag = new DataNewrelicEntityTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataNewrelicEntityTag[] | cdktn.IResolvable) {
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
      domain: cdktn.stringToTerraform(this._domain),
      entity_tags: cdktn.stringToTerraform(this._entityTags),
      id: cdktn.stringToTerraform(this._id),
      ignore_case: cdktn.booleanToTerraform(this._ignoreCase),
      ignore_not_found: cdktn.booleanToTerraform(this._ignoreNotFound),
      name: cdktn.stringToTerraform(this._name),
      type: cdktn.stringToTerraform(this._type),
      tag: cdktn.listMapper(dataNewrelicEntityTagToTerraform, true)(this._tag.internalValue),
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
      domain: {
        value: cdktn.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_tags: {
        value: cdktn.stringToHclTerraform(this._entityTags),
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
      ignore_case: {
        value: cdktn.booleanToHclTerraform(this._ignoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_not_found: {
        value: cdktn.booleanToHclTerraform(this._ignoreNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktn.listMapperHcl(dataNewrelicEntityTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNewrelicEntityTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
