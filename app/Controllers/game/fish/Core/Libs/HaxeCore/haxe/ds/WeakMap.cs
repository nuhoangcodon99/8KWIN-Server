// Generated by Haxe 3.4.4

#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds {
	public class WeakMap<K, V> : global::haxe.lang.HxObject, global::haxe.ds.WeakMap, global::haxe.IMap<K, V> {
		
		public WeakMap(global::haxe.lang.EmptyObject empty) {
		}
		
		
		public WeakMap() {
			global::haxe.ds.WeakMap<object, object>.__hx_ctor_haxe_ds_WeakMap<K, V>(((global::haxe.ds.WeakMap<K, V>) (this) ));
		}
		
		
		public static void __hx_ctor_haxe_ds_WeakMap<K_c, V_c>(global::haxe.ds.WeakMap<K_c, V_c> __hx_this) {
			throw global::haxe.lang.HaxeException.wrap("Not implemented for this platform");
		}
		
		
		public static object __hx_cast<K_c_c, V_c_c>(global::haxe.ds.WeakMap me) {
			return ( (( me != null )) ? (me.haxe_ds_WeakMap_cast<K_c_c, V_c_c>()) : default(object) );
		}
		
		
		public virtual object haxe_ds_WeakMap_cast<K_c, V_c>() {
			if (( global::haxe.lang.Runtime.eq(typeof(K), typeof(K_c)) && global::haxe.lang.Runtime.eq(typeof(V), typeof(V_c)) )) {
				return this;
			}
			
			global::haxe.ds.WeakMap<K_c, V_c> new_me = new global::haxe.ds.WeakMap<K_c, V_c>(global::haxe.lang.EmptyObject.EMPTY);
			global::ArrayHaxe<object> fields = global::ReflectHaxe.fields(this);
			int i = 0;
			while (( i < fields.length )) {
				string field = global::haxe.lang.Runtime.toString(fields[i++]);
				global::ReflectHaxe.setField(new_me, field, global::ReflectHaxe.field(this, field));
			}
			
			return new_me;
		}
		
		
		public virtual object haxe_IMap_cast<K_c, V_c>() {
			return this.haxe_ds_WeakMap_cast<K_c, V_c>();
		}
		
		
		public virtual void @set(K key, V @value) {
		}
		
		
		public virtual global::haxe.lang.Null<V> @get(K key) {
			return default(global::haxe.lang.Null<V>);
		}
		
		
		public virtual bool exists(K key) {
			return false;
		}
		
		
		public virtual bool @remove(K key) {
			return false;
		}
		
		
		public virtual object keys() {
			return null;
		}
		
		
		public virtual object iterator() {
			return null;
		}
		
		
		public virtual string toString() {
			return null;
		}
		
		
		public override object __hx_getField(string field, int hash, bool throwErrors, bool isCheck, bool handleProperties) {
			unchecked {
				switch (hash) {
					case 946786476:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "toString", 946786476)) );
					}
					
					
					case 328878574:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "iterator", 328878574)) );
					}
					
					
					case 1191633396:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "keys", 1191633396)) );
					}
					
					
					case 76061764:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "remove", 76061764)) );
					}
					
					
					case 1071652316:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "exists", 1071652316)) );
					}
					
					
					case 5144726:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "get", 5144726)) );
					}
					
					
					case 5741474:
					{
						return ((global::haxe.lang.Function) (new global::haxe.lang.Closure(this, "set", 5741474)) );
					}
					
					
					default:
					{
						return base.__hx_getField(field, hash, throwErrors, isCheck, handleProperties);
					}
					
				}
				
			}
		}
		
		
		public override object __hx_invokeField(string field, int hash, global::ArrayHaxe dynargs) {
			unchecked {
				switch (hash) {
					case 946786476:
					{
						return this.toString();
					}
					
					
					case 328878574:
					{
						return this.iterator();
					}
					
					
					case 1191633396:
					{
						return this.keys();
					}
					
					
					case 76061764:
					{
						return this.@remove(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]));
					}
					
					
					case 1071652316:
					{
						return this.exists(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]));
					}
					
					
					case 5144726:
					{
						return (this.@get(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]))).toDynamic();
					}
					
					
					case 5741474:
					{
						this.@set(global::haxe.lang.Runtime.genericCast<K>(dynargs[0]), global::haxe.lang.Runtime.genericCast<V>(dynargs[1]));
						break;
					}
					
					
					default:
					{
						return base.__hx_invokeField(field, hash, dynargs);
					}
					
				}
				
				return null;
			}
		}
		
		
		public override string ToString(){
			return this.toString();
		}
		
		
	}
}



#pragma warning disable 109, 114, 219, 429, 168, 162
namespace haxe.ds {
	[global::haxe.lang.GenericInterface(typeof(global::haxe.ds.WeakMap<object, object>))]
	public interface WeakMap : global::haxe.lang.IHxObject, global::haxe.lang.IGenericObject {
		
		object haxe_ds_WeakMap_cast<K_c, V_c>();
		
		object haxe_IMap_cast<K_c, V_c>();
		
		object keys();
		
		object iterator();
		
		string toString();
		
	}
}


