const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        message: 'No authentication token, access denied',
        error: 'Authentication required'
      });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    if (!verified || !verified.userId) {
      return res.status(401).json({ 
        message: 'Invalid token format',
        error: 'Token verification failed'
      });
    }

    req.user = verified;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        message: 'Token has expired',
        error: 'Token expired'
      });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        message: 'Invalid token',
        error: 'Invalid token'
      });
    }

    res.status(401).json({ 
      message: 'Token verification failed, authorization denied',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}; 