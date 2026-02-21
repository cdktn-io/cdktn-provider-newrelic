# `notificationChannel` Submodule <a name="`notificationChannel` Submodule" id="@cdktn/provider-newrelic.notificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationChannel <a name="NotificationChannel" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel newrelic_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

new notificationChannel.NotificationChannel(scope: Construct, id: string, config: NotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig">NotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig">NotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperty` <a name="putProperty" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putProperty"></a>

```typescript
public putProperty(value: IResolvable | NotificationChannelProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putProperty.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts"></a>

```typescript
public putTimeouts(value: NotificationChannelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isConstruct"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

notificationChannel.NotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

notificationChannel.NotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

notificationChannel.NotificationChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

notificationChannel.NotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.property">property</a></code> | <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList">NotificationChannelPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference">NotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.propertyInput">propertyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.property"></a>

```typescript
public readonly property: NotificationChannelPropertyList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList">NotificationChannelPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.timeouts"></a>

```typescript
public readonly timeouts: NotificationChannelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference">NotificationChannelTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.propertyInput"></a>

```typescript
public readonly propertyInput: IResolvable | NotificationChannelProperty[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NotificationChannelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationChannelConfig <a name="NotificationChannelConfig" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

const notificationChannelConfig: notificationChannel.NotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.destinationId">destinationId</a></code> | <code>string</code> | (Required) The id of the destination. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.name">name</a></code> | <code>string</code> | (Required) The name of the channel. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.product">product</a></code> | <code>string</code> | (Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT). |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.property">property</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]</code> | property block. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.type">type</a></code> | <code>string</code> | (Required) The type of the channel. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.accountId">accountId</a></code> | <code>number</code> | The account id of the channel. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the channel is active. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#id NotificationChannel#id}. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

(Required) The id of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#destination_id NotificationChannel#destination_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#name NotificationChannel#name}

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

(Required) The type of the channel product. One of: (DISCUSSIONS, ERROR_TRACKING, IINT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#product NotificationChannel#product}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.property"></a>

```typescript
public readonly property: IResolvable | NotificationChannelProperty[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#property NotificationChannel#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

(Required) The type of the channel.

One of: (WEBHOOK, EMAIL, SERVICENOW_INCIDENTS, SERVICE_NOW_APP, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA_CLASSIC, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE, MICROSOFT_TEAMS, WORKFLOW_AUTOMATION).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#type NotificationChannel#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account id of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#account_id NotificationChannel#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the channel is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#active NotificationChannel#active}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#id NotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NotificationChannelTimeouts;
```

- *Type:* <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#timeouts NotificationChannel#timeouts}

---

### NotificationChannelProperty <a name="NotificationChannelProperty" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

const notificationChannelProperty: notificationChannel.NotificationChannelProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.key">key</a></code> | <code>string</code> | Notification property key. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.value">value</a></code> | <code>string</code> | Notification property value. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.displayValue">displayValue</a></code> | <code>string</code> | Notification property display key. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.label">label</a></code> | <code>string</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#key NotificationChannel#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#value NotificationChannel#value}

---

##### `displayValue`<sup>Optional</sup> <a name="displayValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#display_value NotificationChannel#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#label NotificationChannel#label}

---

### NotificationChannelTimeouts <a name="NotificationChannelTimeouts" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

const notificationChannelTimeouts: notificationChannel.NotificationChannelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#create NotificationChannel#create}. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#update NotificationChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#create NotificationChannel#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/notification_channel#update NotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationChannelPropertyList <a name="NotificationChannelPropertyList" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

new notificationChannel.NotificationChannelPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get"></a>

```typescript
public get(index: number): NotificationChannelPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationChannelProperty[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>[]

---


### NotificationChannelPropertyOutputReference <a name="NotificationChannelPropertyOutputReference" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

new notificationChannel.NotificationChannelPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetDisplayValue">resetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayValue` <a name="resetDisplayValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetDisplayValue"></a>

```typescript
public resetDisplayValue(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValueInput">displayValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValue">displayValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayValueInput`<sup>Optional</sup> <a name="displayValueInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValueInput"></a>

```typescript
public readonly displayValueInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationChannelProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelProperty">NotificationChannelProperty</a>

---


### NotificationChannelTimeoutsOutputReference <a name="NotificationChannelTimeoutsOutputReference" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer"></a>

```typescript
import { notificationChannel } from '@cdktn/provider-newrelic'

new notificationChannel.NotificationChannelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationChannelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.notificationChannel.NotificationChannelTimeouts">NotificationChannelTimeouts</a>

---



