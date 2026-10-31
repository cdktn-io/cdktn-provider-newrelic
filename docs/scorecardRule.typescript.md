# `scorecardRule` Submodule <a name="`scorecardRule` Submodule" id="@cdktn/provider-newrelic.scorecardRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScorecardRule <a name="ScorecardRule" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule newrelic_scorecard_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

new scorecardRule.ScorecardRule(scope: Construct, id: string, config: ScorecardRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine">putNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight">resetImpactWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel">resetProgressLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval">resetRunInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNrqlEngine` <a name="putNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine"></a>

```typescript
public putNrqlEngine(value: ScorecardRuleNrqlEngine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags"></a>

```typescript
public putTags(value: IResolvable | ScorecardRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ScorecardRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImpactWeight` <a name="resetImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight"></a>

```typescript
public resetImpactWeight(): void
```

##### `resetProgressLevel` <a name="resetProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel"></a>

```typescript
public resetProgressLevel(): void
```

##### `resetRunInterval` <a name="resetRunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval"></a>

```typescript
public resetRunInterval(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

scorecardRule.ScorecardRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

scorecardRule.ScorecardRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

scorecardRule.ScorecardRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

scorecardRule.ScorecardRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ScorecardRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ScorecardRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ScorecardRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine">nrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput">impactWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput">nrqlEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput">progressLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput">runIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight">impactWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel">progressLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval">runInterval</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `nrqlEngine`<sup>Required</sup> <a name="nrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine"></a>

```typescript
public readonly nrqlEngine: ScorecardRuleNrqlEngineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags"></a>

```typescript
public readonly tags: ScorecardRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts"></a>

```typescript
public readonly timeouts: ScorecardRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `impactWeightInput`<sup>Optional</sup> <a name="impactWeightInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput"></a>

```typescript
public readonly impactWeightInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nrqlEngineInput`<sup>Optional</sup> <a name="nrqlEngineInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput"></a>

```typescript
public readonly nrqlEngineInput: ScorecardRuleNrqlEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `progressLevelInput`<sup>Optional</sup> <a name="progressLevelInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput"></a>

```typescript
public readonly progressLevelInput: string;
```

- *Type:* string

---

##### `runIntervalInput`<sup>Optional</sup> <a name="runIntervalInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput"></a>

```typescript
public readonly runIntervalInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ScorecardRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ScorecardRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `impactWeight`<sup>Required</sup> <a name="impactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight"></a>

```typescript
public readonly impactWeight: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `progressLevel`<sup>Required</sup> <a name="progressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel"></a>

```typescript
public readonly progressLevel: string;
```

- *Type:* string

---

##### `runInterval`<sup>Required</sup> <a name="runInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval"></a>

```typescript
public readonly runInterval: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScorecardRuleConfig <a name="ScorecardRuleConfig" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

const scorecardRuleConfig: scorecardRule.ScorecardRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this rule is active. Set to false to pause evaluation without deleting the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the scorecard rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine">nrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | nrql_engine block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description">description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight">impactWeight</a></code> | <code>number</code> | Relative weight of this rule's contribution to the overall scorecard score. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel">progressLevel</a></code> | <code>string</code> | The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval">runInterval</a></code> | <code>number</code> | Evaluation frequency in minutes. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this rule is active. Set to false to pause evaluation without deleting the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the scorecard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#name ScorecardRule#name}

---

##### `nrqlEngine`<sup>Required</sup> <a name="nrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine"></a>

```typescript
public readonly nrqlEngine: ScorecardRuleNrqlEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

nrql_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#description ScorecardRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#id ScorecardRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `impactWeight`<sup>Optional</sup> <a name="impactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight"></a>

```typescript
public readonly impactWeight: number;
```

- *Type:* number

Relative weight of this rule's contribution to the overall scorecard score.

Must be a non-negative integer. Omit for equal weighting across all rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}

---

##### `progressLevel`<sup>Optional</sup> <a name="progressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel"></a>

```typescript
public readonly progressLevel: string;
```

- *Type:* string

The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}

---

##### `runInterval`<sup>Optional</sup> <a name="runInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval"></a>

```typescript
public readonly runInterval: number;
```

- *Type:* number

Evaluation frequency in minutes.

Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ScorecardRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#tags ScorecardRule#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ScorecardRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}

---

### ScorecardRuleNrqlEngine <a name="ScorecardRuleNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

const scorecardRuleNrqlEngine: scorecardRule.ScorecardRuleNrqlEngine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts">accounts</a></code> | <code>number[]</code> | Account IDs where this rule runs. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query">query</a></code> | <code>string</code> | The NRQL query. Must be FACET-ed and alias the result as 'score'. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts">joinAccounts</a></code> | <code>number[]</code> | Additional account IDs to join with the query accounts. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts"></a>

```typescript
public readonly accounts: number[];
```

- *Type:* number[]

Account IDs where this rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The NRQL query. Must be FACET-ed and alias the result as 'score'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#query ScorecardRule#query}

---

##### `joinAccounts`<sup>Optional</sup> <a name="joinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts"></a>

```typescript
public readonly joinAccounts: number[];
```

- *Type:* number[]

Additional account IDs to join with the query accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}

---

### ScorecardRuleTags <a name="ScorecardRuleTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

const scorecardRuleTags: scorecardRule.ScorecardRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values">values</a></code> | <code>string[]</code> | The tag values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#key ScorecardRule#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#values ScorecardRule#values}

---

### ScorecardRuleTimeouts <a name="ScorecardRuleTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

const scorecardRuleTimeouts: scorecardRule.ScorecardRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#create ScorecardRule#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/scorecard_rule#update ScorecardRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScorecardRuleNrqlEngineOutputReference <a name="ScorecardRuleNrqlEngineOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

new scorecardRule.ScorecardRuleNrqlEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts">resetJoinAccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJoinAccounts` <a name="resetJoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts"></a>

```typescript
public resetJoinAccounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput">accountsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput">joinAccountsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts">accounts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts">joinAccounts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: number[];
```

- *Type:* number[]

---

##### `joinAccountsInput`<sup>Optional</sup> <a name="joinAccountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput"></a>

```typescript
public readonly joinAccountsInput: number[];
```

- *Type:* number[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts"></a>

```typescript
public readonly accounts: number[];
```

- *Type:* number[]

---

##### `joinAccounts`<sup>Required</sup> <a name="joinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts"></a>

```typescript
public readonly joinAccounts: number[];
```

- *Type:* number[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ScorecardRuleNrqlEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---


### ScorecardRuleTagsList <a name="ScorecardRuleTagsList" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

new scorecardRule.ScorecardRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get"></a>

```typescript
public get(index: number): ScorecardRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScorecardRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>[]

---


### ScorecardRuleTagsOutputReference <a name="ScorecardRuleTagsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

new scorecardRule.ScorecardRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScorecardRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags">ScorecardRuleTags</a>

---


### ScorecardRuleTimeoutsOutputReference <a name="ScorecardRuleTimeoutsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { scorecardRule } from '@cdktn/provider-newrelic'

new scorecardRule.ScorecardRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScorecardRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---



