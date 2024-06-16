class IVisitor {
    static visit(actividad) {
      throw new Error("This method should be overridden!");
    }
  }
  
module.exports = IVisitor;