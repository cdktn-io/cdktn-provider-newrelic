/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NrqlMacroConfig extends cdktn.TerraformMetaArguments {
  /**
  * The NRQL fragment this macro expands to wherever `$name` appears in a query. Changes to this field take effect immediately across every dashboard widget, alert condition, and query that references the macro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro#expression NrqlMacro#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro#id NrqlMacro#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique name for the macro within your organization. Once created, the name cannot be changed — it is the identifier used to reference the macro as `$name` in NRQL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro#name NrqlMacro#name}
  */
  readonly name: string;
  /**
  * The number of positional parameters the expression accepts, expressed as bare `$1`, `$2`, ... tokens. Required when the expression contains any positional parameters; defaults to `0` for expressions that do not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro#parameter_count NrqlMacro#parameter_count}
  */
  readonly parameterCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro newrelic_nrql_macro}
*/
export class NrqlMacro extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_nrql_macro";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NrqlMacro resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NrqlMacro to import
  * @param importFromId The id of the existing NrqlMacro that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NrqlMacro to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_nrql_macro", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/nrql_macro newrelic_nrql_macro} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NrqlMacroConfig
  */
  public constructor(scope: Construct, id: string, config: NrqlMacroConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_nrql_macro',
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
    this._expression = config.expression;
    this._id = config.id;
    this._name = config.name;
    this._parameterCount = config.parameterCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // parameter_count - computed: true, optional: true, required: false
  private _parameterCount?: number; 
  public get parameterCount() {
    return this.getNumberAttribute('parameter_count');
  }
  public set parameterCount(value: number) {
    this._parameterCount = value;
  }
  public resetParameterCount() {
    this._parameterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterCountInput() {
    return this._parameterCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expression: cdktn.stringToTerraform(this._expression),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      parameter_count: cdktn.numberToTerraform(this._parameterCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expression: {
        value: cdktn.stringToHclTerraform(this._expression),
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
      parameter_count: {
        value: cdktn.numberToHclTerraform(this._parameterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
