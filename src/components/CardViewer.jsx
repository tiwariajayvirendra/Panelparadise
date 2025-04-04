import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Close as CloseIcon,
  NavigateNext as NextIcon,
  NavigateBefore as PrevIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@mui/icons-material';

const CardViewer = ({ open, onClose, card, allCards, category }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (card && allCards) {
      const index = allCards.findIndex(c => c.id === card.id);
      setCurrentIndex(index);
    }
  }, [card, allCards]);

  const handleNext = () => {
    if (currentIndex < allCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          overflow: 'hidden',
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative', height: '90vh' }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)',
            },
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Navigation buttons */}
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)',
            },
            zIndex: 2,
          }}
        >
          <PrevIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === allCards.length - 1}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)',
            },
            zIndex: 2,
          }}
        >
          <NextIcon />
        </IconButton>

        {/* Zoom controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            bgcolor: 'rgba(0,0,0,0.5)',
            borderRadius: 1,
            p: 1,
            zIndex: 2,
          }}
        >
          <IconButton
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            sx={{ color: 'white' }}
          >
            <ZoomOutIcon />
          </IconButton>
          <IconButton
            onClick={handleZoomIn}
            disabled={scale >= 3}
            sx={{ color: 'white' }}
          >
            <ZoomInIcon />
          </IconButton>
        </Box>

        {/* Image container */}
        <Box
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: scale > 1 ? 'grab' : 'default',
            '&:active': {
              cursor: scale > 1 ? 'grabbing' : 'default',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
            <img
              src={allCards[currentIndex].image}
              alt={allCards[currentIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

        {/* Card info */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            color: 'white',
            p: 2,
            zIndex: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {allCards[currentIndex].title}
          </Typography>
          <Typography variant="body2">
            {allCards[currentIndex].description}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            {currentIndex + 1} / {allCards.length}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CardViewer; 