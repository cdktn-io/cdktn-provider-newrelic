# `cloudAwsEuSovereignIntegrations` Submodule <a name="`cloudAwsEuSovereignIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignIntegrations <a name="CloudAwsEuSovereignIntegrations" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

new cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations(scope: Construct, id: string, config: CloudAwsEuSovereignIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig">CloudAwsEuSovereignIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig">CloudAwsEuSovereignIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay">putXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling">resetBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay">resetXRay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBilling` <a name="putBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling"></a>

```typescript
public putBilling(value: CloudAwsEuSovereignIntegrationsBilling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail"></a>

```typescript
public putCloudtrail(value: CloudAwsEuSovereignIntegrationsCloudtrail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `putXRay` <a name="putXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay"></a>

```typescript
public putXRay(value: CloudAwsEuSovereignIntegrationsXRay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBilling` <a name="resetBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling"></a>

```typescript
public resetBilling(): void
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail"></a>

```typescript
public resetCloudtrail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetXRay` <a name="resetXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay"></a>

```typescript
public resetXRay(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAwsEuSovereignIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAwsEuSovereignIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay">xRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput">billingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput">xRayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing"></a>

```typescript
public readonly billing: CloudAwsEuSovereignIntegrationsBillingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a>

---

##### `xRay`<sup>Required</sup> <a name="xRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay"></a>

```typescript
public readonly xRay: CloudAwsEuSovereignIntegrationsXRayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput"></a>

```typescript
public readonly billingInput: CloudAwsEuSovereignIntegrationsBilling;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput"></a>

```typescript
public readonly cloudtrailInput: CloudAwsEuSovereignIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: number;
```

- *Type:* number

---

##### `xRayInput`<sup>Optional</sup> <a name="xRayInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput"></a>

```typescript
public readonly xRayInput: CloudAwsEuSovereignIntegrationsXRay;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignIntegrationsBilling <a name="CloudAwsEuSovereignIntegrationsBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

const cloudAwsEuSovereignIntegrationsBilling: cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsCloudtrail <a name="CloudAwsEuSovereignIntegrationsCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

const cloudAwsEuSovereignIntegrationsCloudtrail: cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsConfig <a name="CloudAwsEuSovereignIntegrationsConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

const cloudAwsEuSovereignIntegrationsConfig: cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay">xRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing"></a>

```typescript
public readonly billing: CloudAwsEuSovereignIntegrationsBilling;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay"></a>

```typescript
public readonly xRay: CloudAwsEuSovereignIntegrationsXRay;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

### CloudAwsEuSovereignIntegrationsXRay <a name="CloudAwsEuSovereignIntegrationsXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

const cloudAwsEuSovereignIntegrationsXRay: cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsEuSovereignIntegrationsBillingOutputReference <a name="CloudAwsEuSovereignIntegrationsBillingOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

new cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsEuSovereignIntegrationsBilling;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---


### CloudAwsEuSovereignIntegrationsCloudtrailOutputReference <a name="CloudAwsEuSovereignIntegrationsCloudtrailOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

new cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsEuSovereignIntegrationsCloudtrail;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---


### CloudAwsEuSovereignIntegrationsXRayOutputReference <a name="CloudAwsEuSovereignIntegrationsXRayOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer"></a>

```typescript
import { cloudAwsEuSovereignIntegrations } from '@cdktn/provider-newrelic'

new cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudAwsEuSovereignIntegrationsXRay;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---



